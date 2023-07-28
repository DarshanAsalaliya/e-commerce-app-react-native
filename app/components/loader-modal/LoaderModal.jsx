import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import styles from './LoaderModalStyle';

/**
 *
 * @param isVisible - it's represent boolean value for modal visible
 * @returns - jsx element for show laoder
 */
const LoaderModal = ({ isVisible }) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export default LoaderModal;
