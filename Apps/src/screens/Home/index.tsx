import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from '@react-navigation/native';

import theme from "../../theme";
import { Alert, Modal, FlatList } from 'react-native';

import { Loading } from "../../components/Loading";
import { ListDeckCard } from "../../components/List/ListDeckCard";
import { ButtonIconBig } from "../../components/Button/ButtonIconBig";
import { ModalCreateDeck } from "../../components/Modal/ModalCreateDeck";
import { ModalButtonOptions } from "../../components/Modal/ModalButtonOptions";
import { ModalChangeNameDeck } from "../../components/Modal/ModalChangeNameDeck";
import { ListEmpty } from "../../components/List/ListEmpty";
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

export function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [deckName, setDeckName] = useState("");
  const [deckNameFirestore, setDeckNameFirestore] = useState("");
  const [decks, setDecks] = useState<{ id: string; }[]>([]);

  const [selectedDeck, setSelectedDeck] = useState('');

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [useButtonOptions, setUseButtonOptions] = useState(false);
  const [useButtonChangeName, setUseButtonChangeName] = useState(false);

  const getToken = async() => {
    const token = await messaging().getToken()
    console.log('token=', token)
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

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
      setIsLoading(true);
      const currentUser = auth().currentUser;
      setDeckNameFirestore(String(currentUser?.uid))
      if (currentUser) {
        await firestore()
          .collection('Users')
          .doc(String(currentUser.uid))
          .collection('Flashcards')
          .get()
          .then(querySnapshot => {
            const decksData = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setDecks(decksData);
            setIsLoading(false);
          })
      } else {
        // Não há usuário autenticado
        console.log('Nenhum usuário autenticado');
      }


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

      const deckCollectionRef = firestore()
        .collection('Users')
        .doc(deckNameFirestore)
        .collection('Flashcards');

      // Verificar se o documento com o nome do deck já existe
      const deckDocSnapshot = await deckCollectionRef.doc(deckName).get();

      if (deckDocSnapshot.exists) {
        Alert.alert('Nome Duplicado', 'Um deck com este nome já existe. Por favor, escolha outro nome.');
        return;
      }

      await deckCollectionRef.doc(deckName).set({});

      closeModal();
      fetchDecks();
      setDeckName('');
      navigation.navigate('CreateFlashCard', { deckName });
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
      console.log(error)
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
        .collection('Users')
        .doc(deckNameFirestore)
        .collection('Flashcards')
        .doc(deckName)
        .get();

      if (deckSnapshot.exists) {
        Alert.alert('Nome Duplicado', 'Já existe um deck com este nome. Por favor, escolha outro nome.');
        return;
      }

      const oldDeckRef = firestore().collection('Users').doc(deckNameFirestore).collection('Flashcards').doc(selectedDeck);
      const newDeckRef = firestore().collection('Users').doc(deckNameFirestore).collection('Flashcards').doc(deckName);

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
              const deckRef = firestore().collection('Users').doc(deckNameFirestore).collection('Flashcards').doc(selectedDeck);

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


  useEffect(() => {
    fetchDecks();
    requestUserPermission()
    getToken()
    firestore().settings({
      persistence: true,
    });
  }, []);

  return (
    <Container >
      <Header title='FlashCard'
        iconNameRight="plus"
        showButtonRight={true}
        iconColorRight={theme.COLORS.BLUE}
        onPressButtonRight={() => openModal()}
        showBackButton
        onPressButtonLeft={() => {}}
        iconNameLeft="bell-slash" 
        iconColorLeft={theme.COLORS.RED}
        />
      {isLoading ? <Loading /> :
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <ListDeckCard
              textTitle={item.id}
              contadorFlashcard={item.id}
              idFlashcard={item.id}
              onPressButtonOptions={() => handleButtonOptions(item.id)}
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
  )
}
