import React, { useEffect, useState, useCallback, useRef } from "react";
import { Container, ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import { Header } from "../../components/Header";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import theme from "../../theme";
import { Alert, Modal, FlatList, ImageBackground } from 'react-native';
import { CreateDeck } from '../../storage/deck/createDeck';
import { EditNameDeck } from '../../storage/deck/editNameDeck';
import { DecksGetAll } from '../../storage/deck/decksGetAll'
import { Loading } from "../../components/Loading";
import { ListDeckCard } from "../../components/List/ListDeckCard";
import { ButtonIconBig } from "../../components/Botton/ButtonIconBig";
import { ModalCreateDeck } from "../../components/Modal/ModalCreateDeck";
import { FlascardGetByDeck } from "../../storage/flashcard/FlascardGetByDeck";
import { ModalButtonOptions } from "../../components/Modal/ModalButtonOptions";
import { deleteDeck } from "../../storage/deck/deleteDeck";
import { ModalChangeNameDeck } from "../../components/Modal/ModalChangeNameDeck";
import { AlertButton } from "../../components/AlertGeneric/style";
import { ListEmpty } from "../../components/List/ListEmpty";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState<{ deck: string; flashcardCount: number }[]>([]);
  const [selectedDeck, setSelectedDeck] = useState('');


  const decksOrdenados = decks.sort((a, b) => a.deck.localeCompare(b.deck));

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

  async function handleSaveDeck() {
    try {
      const deckNameGroup = await DecksGetAll();
      if (deckName.trim().length === 0) {
        throw new Error('Não é possível salvar sem um nome.');
      }
      await CreateDeck(deckName);
      closeModal();
      fetchDecks();
      navigation.navigate('CreateFlashCard', { deckName });
      setDeckName('')
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  }

  async function handleEditNameDeck() {
    try {
      if (deckName.trim().length === 0) {
        throw new Error('Não é possível salvar sem um nome.');
      }
      await EditNameDeck(selectedDeck, deckName);
      closeModal();
      fetchDecks();
      setDeckName('')
    } catch (error: any) {
      Alert.alert('Error', error.message);

    }
  }

  async function handledeckRemove() {
    try {

      await deleteDeck(selectedDeck)
      fetchDecks();
    } catch (error) {
      console.log(error);

      Alert.alert('Remover Flashcard', 'Não foi possível remover flashcard.');
    }
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

  async function fetchDecks() {
    setIsLoading(true);
    try {
      
      const data = await DecksGetAll();

      // Atualizar a lista de decks com o número de flashcards
      const decksWithFlashcardCount = await Promise.all(
        data.map(async (deck) => {
          const flashcards = await FlascardGetByDeck(deck);
          return { deck, flashcardCount: flashcards.length };
        })
      );

      setDecks(decksWithFlashcardCount);
    } catch (error) {
      Alert.alert('Decks', 'Não foi possível carregar os Decks.');
    } finally {
      
    }
    setIsLoading(false);
  }

  function buttonAddFlashcard(deckName: string) {
    navigation.navigate('CreateFlashCard', { deckName });
  }
  function buttonPracticeFlashcard(deckName: string) {
    navigation.navigate('Practice', { deckName });
  }

  useFocusEffect(useCallback(() => {
    fetchDecks()
  }, []))

  return (
    <ImageBackground source={require('../../assets/img/back6.png')} style={{flex: 1}}>
    <Container >
      <Header title='FlashCard' iconNameRight="plus" showButtonRight={true} iconColorRight={theme.COLORS.BLUE} onPressButtonRight={() => openModal()} />
      {isLoading ? <Loading /> :
        <FlatList
          data={decksOrdenados}
          keyExtractor={(item) => item.deck}
          renderItem={({ item }) => (
            <ListDeckCard
              textTitle={item.deck}
              contadorFlashcard={item.flashcardCount}
              onPressButtonCreate={() => buttonAddFlashcard(item.deck)}
              onPressButtonOptions={() => handleButtonOptions(item.deck)}
              onPressButtonEdit={() => navegar(item.deck)}
              onPressButtonPractice={() => { buttonPracticeFlashcard(item.deck)}}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Crie seu primeiro Deck!" />
          )}
        />
      }
      {/* <ButtonIconBig
        iconName="plus"
        onPress={() => openModal()}
        style={{
          position: "absolute",
          bottom: 30
        }}
      /> */}

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
