import { Alert  } from 'react-native';

export const AlertGeneric = (title: string, message: string, buttons: { text: string, onPress?: () => void }[]) => {
  Alert.alert(
    title,
    message,
    buttons.map(button => ({
      text: button.text,
      onPress: button.onPress || (() => {}),
    })),
    { cancelable: false,}
    
  );
};
