import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackRouter, AppStackRoutes} from './app.routes.types';
import {HomeScreen, RepositoriesScreen, UsersScreen} from '../screens';

const AppNavigator = createNativeStackNavigator<AppStackRouter>();

export const AppRoutes = () => (
  <AppNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppNavigator.Screen
      name={AppStackRoutes.HOME_SCREEN}
      component={HomeScreen}
    />
    <AppNavigator.Screen
      name={AppStackRoutes.USERS_SCREEN}
      component={UsersScreen}
    />
    <AppNavigator.Screen
      name={AppStackRoutes.REPOSITORIES_SCREEN}
      component={RepositoriesScreen}
    />
  </AppNavigator.Navigator>
);
