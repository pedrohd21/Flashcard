import AsyncStorage from '@react-native-async-storage/async-storage';
import { DECK_COLLECTION } from '../storageConfig';

export async function DecksGetAll() {
  try{
    const storage = await AsyncStorage.getItem(DECK_COLLECTION);

    const decks: string[] = storage ? JSON.parse(storage) : [];
    return decks;
  }catch(error) {
    throw error;
  }
}