import React, { useEffect, useState, useCallback } from "react";
import { Container, ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import { Header } from "../../components/Header";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import theme from "../../theme";
import { Alert, Modal, FlatList } from 'react-native';
import { CreateDeck } from '../../storage/deck/createDeck';
import { DecksGetAll } from '../../storage/deck/decksGetAll'
import { Loading } from "../../components/Loading";
import { ListDeckCard } from "../../components/List/ListDeckCard";
import { ButtonIconBig } from "../../components/Botton/ButtonIconBig";
import { ModalCreateDeck } from "../../components/Modal/ModalCreateDeck";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState<string[]>([]);

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  function openModal() {
    setModalVisible(true);
  };

  function closeModal() {
    setModalVisible(false);
    setDeckName('')
  };

  async function handleSave() {
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

  function navegar(deckName: string) {
    navigation.navigate('ListFlashCard', { deckName })
  }

  async function fetchDecks() {
    try {
      setIsLoading(true);
      const data = await DecksGetAll();
      setDecks(data)
    } catch (error) {
      Alert.alert('Decks', 'Não foi possível carregar os Decks.');
    } finally {
      setIsLoading(false);
    }
  }

  function buttonAddFlashcard(deckName: string) {

    navigation.navigate('CreateFlashCard', { deckName });
  }

  useFocusEffect(useCallback(() => {
    fetchDecks()
  }, []))

  useEffect(() => {
    //Atualiza o input
  }, [deckName]);

  return (
    <Container>
      <Header title='FlashCard' iconNameRight="bell-slash" showButtonRight={true} iconColorRight={theme.COLORS.RED} />
      {isLoading ? <Loading /> :
        <FlatList
          data={decks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ListDeckCard
              onPress={() => navegar(item)}
              textTitle={item}
              contadorFlashcard={decks.length}
              onPressButtonCreate={() => buttonAddFlashcard(item)}
            />
          )}
        />
      }
      <ButtonIconBig
        iconName="plus"
        onPress={() => openModal()}
        style={{
          position: "absolute",
          bottom: 30
        }}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <ModalCreateDeck
          onChangeNameDeck={setDeckName}
          onCancel={closeModal}
          onSave={handleSave}
        />
      </Modal>
    </Container>
  )
}
