import React, { useEffect, useState } from "react";
import { Container, ModalContainer, ModalContent, Text, ModalButton, TextInput, ButtonModalContainer } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from '@react-navigation/native';
import { ListFlashcard } from "../../components/Card/ListFlashcard";
import theme from "../../theme";
import { ButtonIconBig } from "../../components/ButtonIconBig";
import { Alert, Modal } from 'react-native';
import { ButtonIconSmall } from "../../components/ButtonIconSmall";
import { CreateDeck } from '../../storage/deck/createDeck';

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deckName, setDeckName] = useState("");

  const navigation = useNavigation();

  function openModal() {
    setModalVisible(true);
  };

  function closeModal() {
    setModalVisible(false);
    setDeckName('')
  };

  async function handleSave() {
    // Lógica para salvar os dados do modal

    try {
      if (deckName.trim().length === 0) {
        console.log('#############', deckName)
        throw new Error('Não é possível salvar sem um nome.');
      }
      await CreateDeck(deckName);
      navigation.navigate('CreateFlashCard', { deckName });
      setDeckName('')

    } catch (error: any) {
      console.log(error.message)
      Alert.alert(error.message);
    }
  }



  useEffect(() => {
    //Atualiza o input
  }, [deckName]);

  return (
    <Container>
      <Header title='FlashCard' iconNameRight="bell-slash" showButtonRight={true} iconColorRight={theme.COLORS.RED} />
      <ListFlashcard
        textTitle=""
        textContent=""
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
