import { Alert } from 'react-native';
import { ButtonLabel, CommonStrings } from '../constant';

export const deleteAlert = onRemove => {
  Alert.alert(
    CommonStrings.areYouSure,
    CommonStrings.alertMessage,
    [
      {
        text: ButtonLabel.cancel,
        onPress: () => {},
      },
      {
        text: ButtonLabel.delete,
        onPress: onRemove,
      },
    ],
    { cancelable: false },
  );
};

export const messageAlert = message => {
  Alert.alert(message);
};
