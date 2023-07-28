import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, ShoppingBag } from 'phosphor-react-native';
import React from 'react';
import { ButtonLabel, Route } from '../constant';
import { HomeScreen, OrderScreen } from '../modules';
import { light, moderateScale, verticalScale } from '../theme';

const BottomStack = createBottomTabNavigator();

/**
 * bottom stack navigation
 * @returns jsx element for bottom stack
 */
const BottomTabnav = () => {
  return (
    <BottomStack.Navigator
      initialRouteName={Route.homeScreen}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: verticalScale(60),
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(14),
        },
        tabBarActiveTintColor: light.green,
      }}>
      <BottomStack.Screen
        options={{
          tabBarLabel: ButtonLabel.home,
          tabBarIcon: ({ focused }) => {
            return (
              <House
                size={moderateScale(24)}
                color={focused ? light.green : light.black}
              />
            );
          },
        }}
        name={Route.homeScreen}
        component={HomeScreen}
      />
      <BottomStack.Screen
        name={Route.orderScreen}
        component={OrderScreen}
        options={{
          tabBarLabel: ButtonLabel.order,
          tabBarIcon: ({ focused }) => {
            return (
              <ShoppingBag
                size={moderateScale(24)}
                color={focused ? light.green : light.black}
              />
            );
          },
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTabnav;
