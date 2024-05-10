import React, { useEffect, useState, useCallback, useRef } from "react";
import { Container, ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import { Header } from "../../components/Header";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import theme from "../../theme";
import { Alert, Modal, FlatList, ImageBackground } from 'react-native';

import { Loading } from "../../components/Loading";
import { ListDeckCard } from "../../components/List/ListDeckCard";
import { ButtonIconBig } from "../../components/Button/ButtonIconBig";
import { ModalCreateDeck } from "../../components/Modal/ModalCreateDeck";
import { ModalButtonOptions } from "../../components/Modal/ModalButtonOptions";
import { ModalChangeNameDeck } from "../../components/Modal/ModalChangeNameDeck";
import { ListEmpty } from "../../components/List/ListEmpty";
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';


export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState<{ id: string }[]>([]);
  const [selectedDeck, setSelectedDeck] = useState('');
  const [counter, setCounter] = useState(Number);

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [useButtonOptions, setUseButtonOptions] = useState(false);
  const [useButtonChangeName, setUseButtonChangeName] = useState(false);

  firestore() // eu quero colocar o firetore como o banco de dados oficial, agora configure esse arquivo, pra que tudo possa funcionar com ele
    .collection('Decks')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        // console.log('Nome Deck: ', documentSnapshot.id);
        // console.log('Frente: ', documentSnapshot.data().Front);
        // console.log('Front: ', documentSnapshot.data().Back);
        // console.log('Minutes: ', documentSnapshot.data().minutes);
      });
    })
    .catch(error => {
      console.error('Erro ao consultar decks: ', error);
    });




  function openModal() {
    setModalVisible(true);
  };

  function closeModal() {
    setModalVisible(false);
    setUseButtonOptions(false)
    setUseButtonChangeName(false)
    setDeckName('')
  };

  async function handleSaveDeck() {
    try {
      if (deckName.trim().length === 0) {
        Alert.alert('Nome', "Não é possível salvar sem um nome.");
        throw new Error('Não é possível salvar sem um nome.');
      }

      setIsLoading(true);

      const deckSnapshot = await firestore()
        .collection('Decks')
        .doc(deckName)
        .get();

      if (deckSnapshot.exists) {
        Alert.alert('Nome duplicado', 'Já existe um deck com este nome.');
        throw new Error('Já existe um deck com este nome.');
      }

      await firestore()
        .collection('Decks')
        .doc(deckName)
        .set({
          //
        });

      closeModal();
      fetchDecks();
      navigation.navigate('CreateFlashCard', { deckName });
      setDeckName('')
    } catch (error) {
      console.error('Erro ao criar deck:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEditNameDeck() {
    try {
      if (deckName.trim().length === 0) {
        throw new Error('Não é possível salvar sem um nome.');
      }
      const oldDeckRef = firestore().collection('Decks').doc(selectedDeck);
      const newDeckRef = firestore().collection('Decks').doc(deckName);
  
      // Obtenha os dados do documento antigo
      const oldDeckSnapshot = await oldDeckRef.get();
      const oldDeckData = oldDeckSnapshot.data() || {}; 
  
      // Crie um novo documento com o novo nome e os mesmos dados do documento antigo
      await newDeckRef.set(oldDeckData);

      await oldDeckRef.delete();

      console.log('deckName')
      console.log(deckName)
      console.log(selectedDeck)

      closeModal();
      fetchDecks();
      setDeckName('')
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
    fetchDecks()
    closeModal()
  }

  async function handledeckRemove() {
    Alert.alert(
      'Remover Flashcard',
      'Tem certeza que deseja remover este deck?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: async () => {
            try {
              setIsLoading(true);

              const deckRef = firestore().collection('Decks').doc(selectedDeck);
              await deckRef.delete();
              closeModal();
              fetchDecks();
            } catch (error) {
              console.error('Erro apagar deck:', error);
            } finally {
              setIsLoading(false);
            }
          },
        },
      ],
      { cancelable: true }
    );
    fetchDecks()
    closeModal()
  }

  function handleButtonOptions(deckName: string) {
    setSelectedDeck(deckName)
    setUseButtonOptions(true)
    openModal()

  }

  function handleButtonEditNameDeck() {
    setUseButtonOptions(false)
    setUseButtonChangeName(true)
    openModal()
  }

  function navegar(deckName: string) {
    navigation.navigate('ListFlashCard', { deckName })
  }

  function buttonAddFlashcard(deckName: string) {
    navigation.navigate('CreateFlashCard', { deckName });
  }
  function buttonPracticeFlashcard(deckName: string) {
    navigation.navigate('Practice', { deckName });
  }

  function signOut() {
    auth().signOut();
  }

  async function fetchDecks() {
    try {
      firestore()
        .collection('Decks')
        .get()
        .then(querySnapshot => {
          const decksData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setDecks(decksData);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Erro ao consultar decks: ', error);
        });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os Decks.');
      setIsLoading(false);
    }
  };

  useFocusEffect(useCallback(() => {
    fetchDecks()
  }, []))

  return (
    <ImageBackground source={require('../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container >
        <Header title='FlashCard'
          iconNameRight="plus"
          showButtonRight={true}
          iconColorRight={theme.COLORS.BLUE}
          onPressButtonRight={() => openModal()}
          showBackButton
          onPressButtonLeft={signOut} />
        {isLoading ? <Loading /> :
          <FlatList
            data={decks}
            renderItem={({ item }) => (
              <ListDeckCard
                textTitle={item.id}
                contadorFlashcard={counter}
                onPressButtonCreate={() => buttonAddFlashcard(item.id)}
                onPressButtonOptions={() => handleButtonOptions(item.id)}
                onPressButtonEdit={() => navegar(item.id)}
              // onPressButtonPractice={() => { buttonPracticeFlashcard(item.deck) }}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="É hora de começar a construir o seu primeiro deck! Vamos nessa juntos?" />
            )}
          />
        }
        {decks.length <= 0 && (
          <ButtonIconBig
            iconName="plus"
            onPress={() => openModal()}
            style={{
              position: "absolute",
              bottom: 30
            }}
          />
        )}

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          {useButtonOptions ?
            <ModalButtonOptions
              onCancel={closeModal}
              onChangeDelete={handledeckRemove}
              onChangeNameDeck={handleButtonEditNameDeck}
            />
            :
            useButtonChangeName ?
              <ModalChangeNameDeck
                onChangeNameDeck={setDeckName}
                onCancel={closeModal}
                onSave={handleEditNameDeck}
              />
              : (
                <ModalCreateDeck
                  onChangeNameDeck={setDeckName}
                  onCancel={closeModal}
                  onSave={handleSaveDeck}

                />
              )
          }

        </Modal>
      </Container>
    </ImageBackground>
  )
}
