export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CreateAccount: undefined;
      LoginAccount: undefined;
      ViewProfile: undefined;

      CreateDeck: undefined;
      
      EditDeck: undefined;
      ListDeck: undefined;

      EditFlashCard: undefined;
      ListFlashCard: {
        deckName: string;
      }
      CreateFlashCard: {
        deckName: string;
      }

      ListPractice: undefined;
      PracticeNow: undefined;
    }
  }
}