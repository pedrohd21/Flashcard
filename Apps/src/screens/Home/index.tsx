import React, { useState, useCallback, useRef } from "react";
import { Container } from "./styles";
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

  function openModal() {
    setModalVisible(true);
  };

  function closeModal() {
    setModalVisible(false);
    setUseButtonOptions(false)
    setUseButtonChangeName(false)
    setDeckName('')
  };

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
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
      setIsLoading(false);
    }
  };

  async function handleSaveDeck() {
    try {
      if (deckName.trim().length === 0) {
        Alert.alert('Nome', "Por favor, insira um nome para o deck.");
        return;
      }

      setIsLoading(true);

      const deckSnapshot = await firestore()
        .collection('Decks')
        .doc(deckName)
        .get();

      if (deckSnapshot.exists) {
        Alert.alert('Nome Duplicado', 'Um deck com este nome já existe. Por favor, escolha outro nome.');
        return
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
      Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleEditNameDeck() {
    try {
      if (deckName.trim().length === 0) {
        Alert.alert('Nome', 'Não é possível salvar sem um nome.');
        return;
      }
      const deckSnapshot = await firestore()
        .collection('Decks')
        .doc(deckName)
        .get();

      if (deckSnapshot.exists) {
        Alert.alert('Nome Duplicado', 'Já existe um deck com este nome. Por favor, escolha outro nome.');
        return;
      }

      const oldDeckRef = firestore().collection('Decks').doc(selectedDeck);
      const newDeckRef = firestore().collection('Decks').doc(deckName);

      // Obtenha os dados do documento antigo
      const oldDeckSnapshot = await oldDeckRef.get();
      const oldDeckData = oldDeckSnapshot.data() || {};

      // Crie um novo documento com o novo nome e os mesmos dados do documento antigo
      await newDeckRef.set(oldDeckData);

      await oldDeckRef.delete();

      closeModal();
      fetchDecks();
      setDeckName('')
    } catch (error: any) {
      Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
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
              Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
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

  function handleListFlascard(deckName: string) {
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
          onPressButtonLeft={signOut} 
          iconNameLeft="power-off"/>
        {isLoading ? <Loading /> :
          <FlatList
            data={decks}
            renderItem={({ item }) => (
              <ListDeckCard
                textTitle={item.id}
                contadorFlashcard={item.id}
                onPressButtonCreate={() => buttonAddFlashcard(item.id)}
                onPressButtonOptions={() => handleButtonOptions(item.id)}
                onPressButtonEdit={() => handleListFlascard(item.id)}
              onPressButtonPractice={() => { buttonPracticeFlashcard(item.id) }}
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
