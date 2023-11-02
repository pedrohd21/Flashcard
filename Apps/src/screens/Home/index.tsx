import React from "react";
import { Container, Text } from "./styles";
import { Header } from "../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native";




export function Home() {
  const navigation = useNavigation();

  function handlePress(){
    navigation.navigate('ListFlashCard');
    console.log('sdfsdfsdfsdfdsfsdf')

  };
  function handlePres2(){
    navigation.navigate('EditFlashCard');
    console.log('sdfsdfsdfsdfdsfsdf')

  };
  return (
    <Container>
      <Header title='FlashCard' iconNameRight="bell-slash" showButtonRight={true} showBackButton={false}/>
      
      <Text>
        Home
      </Text>
      <Button  title="Aqui" onPress={handlePress} color='#993399'/>
      <Button  title="Aqui" onPress={handlePres2} color='#993399'/>
    </Container>
  )
}