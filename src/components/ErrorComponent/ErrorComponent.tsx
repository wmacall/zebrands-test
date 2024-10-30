import React from 'react';
import {Center, Heading, Image} from '@gluestack-ui/themed';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ErrorComponent = () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Center testID="error-search" flex={1} gap="$16" paddingBottom={bottom}>
      <Image
        w={100}
        h={100}
        source={require('../../assets/error.png')}
        alt="Empty search"
      />
      <Heading px="$12" textAlign="center">
        Opps! Something went wrong. Please try again later.
      </Heading>
    </Center>
  );
};
