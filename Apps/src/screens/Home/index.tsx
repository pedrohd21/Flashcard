import React, { useEffect, useState, useCallback } from "react";
import { Container, ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import { Header } from "../../components/Header";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ListDeck } from "../../components/ListDeck";
import theme from "../../theme";
import { ButtonIconBig } from "../../components/ButtonIconBig";
import { Alert, Modal, FlatList } from 'react-native';
import { CreateDeck } from '../../storage/deck/createDeck';
import { DecksGetAll } from '../../storage/deck/decksGetAll'

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deckName, setDeckName] = useState("");
  const [decks, setDecks] = useState<string[]>([]);

  const navigation = useNavigation();
  
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
  
  async function fetchDecks() {
    try {
      const data = await DecksGetAll();
      setDecks(data)
    } catch (error) {
      Alert.alert('Decks', 'Não foi possível carregar os Decks.');
    } 
  }
  
  useFocusEffect(useCallback(() => {
    fetchDecks()
  },[]))

  useEffect(() => {
    //Atualiza o input
  }, [deckName]);

  return (
    <Container>
      <Header title='FlashCard' iconNameRight="bell-slash" showButtonRight={true} iconColorRight={theme.COLORS.RED} />
  
      <FlatList
        data={decks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ListDeck
            onPress={() => {}}
            textTitle={item}
          />
        )}
      />
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
        <ModalContainer >
          <ModalContent >
            <Text>Criar Deck:</Text>
            <TextInput
              onChangeText={setDeckName}
              placeholder="Nome do Deck"
            />
            <ButtonModalContainer >
              <ModalButton onPress={closeModal} style={{ backgroundColor: theme.COLORS.RED }}>
                <Text>Cancelar</Text>
              </ModalButton>
              <ModalButton onPress={handleSave} style={{ backgroundColor: theme.COLORS.GRAY_500 }}>
                <Text>Salvar</Text>
              </ModalButton>
            </ButtonModalContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  )
}
