export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      LoginAccount: undefined;
      ViewProfile: undefined;

      CreateDeck: undefined;

      EditDeck: undefined;
      ListDeck: undefined;

      EditFlashCard: undefined;
      ListFlashCard: {
        deckName: string;
      };

      CreateFlashCard: {
        deckName: string;
      };

      ListDeckCard: {
        deckName: string;
      };

      ListPractice: undefined;

      Practice: {
        deckName: string;
      };
    }
  }
}