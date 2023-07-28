import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from './components';
import { MainStackNavigation } from './navigation';
import { persistor, store } from './redux';
import { ApplicationStyle } from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <SafeAreaView style={ApplicationStyle.screen}>
          <MainStackNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
