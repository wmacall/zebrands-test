import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {SplashScreen} from './src/screens/';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
