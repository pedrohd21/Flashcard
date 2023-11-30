import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlascardGetByDeck } from './FlascardGetByDeck';
import { FlashcardStorageDTO } from './FlashcardStorageDTO';
import { FLASHCARD_COLLECTION } from '../storageConfig';

export async function flashcardAddDeck(newFlashcard: FlashcardStorageDTO, deck: string) {
  try {

    const storedFlashcards = await FlascardGetByDeck(deck);

    const storage = JSON.stringify([...storedFlashcards, newFlashcard]);

    await AsyncStorage.setItem(`${FLASHCARD_COLLECTION}-${deck}`, storage)
  } catch (error) {
    throw error;
  }
}