import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {config} from '@gluestack-ui/config';

export const TestProvider = ({children}: PropsWithChildren) => {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider
        initialMetrics={{
          frame: {x: 0, y: 0, width: 0, height: 0},
          insets: {top: 0, left: 0, right: 0, bottom: 0},
        }}>
        <NavigationContainer>{children}</NavigationContainer>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
};
