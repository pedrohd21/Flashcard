export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      LoginAccount: undefined;
      Options: undefined;

      EditDeck: undefined;
      ListDeck: undefined;

      EditFlashCard: {
        deckName: string;
        nameCard: string;
      };

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