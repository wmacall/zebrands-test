import React from 'react';
import {
  Button,
  ButtonText,
  Center,
  Heading,
  Image,
  SafeAreaView,
  Text,
} from '@gluestack-ui/themed';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppStackRouter, AppStackRoutes} from '../../routes';
import {SEARCH_OPTIONS} from '../../constants';

export const HomeScreen = () => {
  const {navigate} = useNavigation<NavigationProp<AppStackRouter>>();
  const onPressOption = (option: AppStackRoutes) => navigate(option);

  return (
    <SafeAreaView flex={1} bg="$white">
      <Center p="$4" gap="$2">
        <Image
          source={require('../../assets/logo.png')}
          rounded="$full"
          width={100}
          height={100}
          alt="ZebrandsLogo"
        />
        <Heading size="2xl">Zėbrands Test</Heading>
        <Text>Select one of the options to start using the app</Text>
      </Center>
      <Center flex={1} gap="$4">
        {SEARCH_OPTIONS.map(({label, value, id}) => (
          <Button
            key={id}
            onPress={() => onPressOption(value)}
            width={250}
            bg="$warmGray700">
            <ButtonText>{label}</ButtonText>
          </Button>
        ))}
      </Center>
    </SafeAreaView>
  );
};
