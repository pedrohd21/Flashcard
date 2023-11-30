import AsyncStorage from '@react-native-async-storage/async-storage';

import { DecksGetAll } from './DecksGetAll';
import { DECK_COLLECTION } from '../storageConfig';

export async function deckCreate(newDeck: string) {
  try{
    const storedDecks = await DecksGetAll();

    const deckAlreadyExists = storedDecks.includes(newDeck);

    if (deckAlreadyExists){
      console.log('ja existe um deck cadastrado com esse nome')
      throw 'ja existe um deck cadastrado com esse nome'
    }
    const storage = JSON.stringify([...storedDecks, newDeck])
    await AsyncStorage.setItem(DECK_COLLECTION, storage);
  }catch(error){
    throw error;
  }
}