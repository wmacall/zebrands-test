import React from 'react';
import {
  ChevronLeftIcon,
  Heading,
  HStack,
  Icon,
  Pressable,
  SafeAreaView,
  View,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title?: string;
}

export const Header = ({title = 'Users'}: HeaderProps) => {
  const {goBack} = useNavigation();
  return (
    <View p="$4" bg="$warmGray700">
      <SafeAreaView />
      <HStack alignItems="center" gap="$4">
        <Pressable
          onPress={goBack}
          h="$10"
          bg="white"
          w="$10"
          rounded="$full"
          alignItems="center"
          justifyContent="center">
          <Icon as={ChevronLeftIcon} color="$warmGray700" size="xl" />
        </Pressable>
        <Heading color="white" size="2xl" textTransform="capitalize">
          {title}
        </Heading>
      </HStack>
    </View>
  );
};
