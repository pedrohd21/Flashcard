import AsyncStorage from '@react-native-async-storage/async-storage';
import {DECK_COLLECTION, FLASHCARD_COLLECTION} from '../storageConfig';

import { DecksGetAll } from './DecksGetAll';

export async function groupRemoveByName(deckDeleted: string) {
  try {
    const storedDecks = await DecksGetAll();

    const decks = storedDecks.filter(deck => deck !== deckDeleted);

    await AsyncStorage.setItem(DECK_COLLECTION, JSON.stringify(decks));
    await AsyncStorage.removeItem(`${FLASHCARD_COLLECTION}-${deckDeleted}`);

  } catch (error) {
    throw error;
  }
}