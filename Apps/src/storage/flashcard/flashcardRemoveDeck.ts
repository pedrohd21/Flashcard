import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlascardGetByDeck } from './FlascardGetByDeck';
import { FLASHCARD_COLLECTION } from '../storageConfig';

export async function FlashcardRemoveDeck(flashcardFront: string, flashcardBack: string, deck: string) {
  try {
    const storage = await FlascardGetByDeck(deck);

    const filtered = storage.filter(flashcard => (flashcard.front !== flashcardFront) && (flashcard.back !== flashcardBack));

    const flashcards = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${FLASHCARD_COLLECTION}-${deck}`, flashcards);

  } catch (error) {
    throw error;
  }
}