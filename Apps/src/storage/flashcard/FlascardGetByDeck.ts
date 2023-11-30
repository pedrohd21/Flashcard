import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlashcardStorageDTO } from './FlashcardStorageDTO';
import { FLASHCARD_COLLECTION } from '../storageConfig';

export async function FlascardGetByDeck(deck: string) {
  try {
    const storage = await AsyncStorage.getItem(`${FLASHCARD_COLLECTION}-${deck}`);

    const flashcards: FlashcardStorageDTO[] = storage ? JSON.parse(storage) : [];

    return flashcards;
  } catch (error) {
    throw error;
  }
}