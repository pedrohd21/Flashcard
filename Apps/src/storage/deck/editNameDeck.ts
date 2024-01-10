import AsyncStorage from '@react-native-async-storage/async-storage';
import { DecksGetAll } from './decksGetAll';
import { DECK_COLLECTION, FLASHCARD_COLLECTION } from '../storageConfig';

export async function EditNameDeck(oldDeckName: string, newDeckName: string) {
  try {
    const storedDecks = await DecksGetAll();

    const deckIndex = storedDecks.indexOf(oldDeckName);

    const updatedDecks = [...storedDecks];
    updatedDecks[deckIndex] = newDeckName;

    const storage = JSON.stringify(updatedDecks);
    await AsyncStorage.setItem(DECK_COLLECTION, storage);

    // Obtenha os flashcards associados ao deck antigo
    const oldDeckFlashcards = await AsyncStorage.getItem(`${FLASHCARD_COLLECTION}-${oldDeckName}`);
    
    // Se existirem flashcards associados ao deck antigo, migre-os para o novo nome do deck
    if (oldDeckFlashcards) {
      await AsyncStorage.setItem(`${FLASHCARD_COLLECTION}-${newDeckName}`, oldDeckFlashcards);
      // Remova os flashcards associados ao deck antigo
      await AsyncStorage.removeItem(`${FLASHCARD_COLLECTION}-${oldDeckName}`);
    }
  } catch (error) {
    throw error;
  }
}
