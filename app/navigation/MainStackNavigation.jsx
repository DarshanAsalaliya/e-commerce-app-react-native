import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from '../constant';
import {
  CartScreen,
  LoginScreen,
  OrderPlaced,
  ProductInfo,
  SignupScreen,
} from '../modules';
import BottomTabnav from './BottomTabNavigation';

const Stack = createStackNavigator();

/**
 * main stack navigation
 * @returns jsx element for main stack
 */
const MainStackNavigation = () => {
  const { isLogin } = useSelector(state => state.AuthReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLogin ? (
          <>
            <Stack.Screen
              name={Route.login}
              component={LoginScreen}></Stack.Screen>
            <Stack.Screen
              name={Route.signup}
              component={SignupScreen}></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name={Route.bottomtabRoute}
              component={BottomTabnav}></Stack.Screen>
            <Stack.Screen
              name={Route.productInfoRoute}
              component={ProductInfo}></Stack.Screen>
            <Stack.Screen
              name={Route.cartScreen}
              component={CartScreen}></Stack.Screen>
            <Stack.Screen
              name={Route.orderPlaced}
              component={OrderPlaced}></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
