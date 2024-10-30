import React from 'react';
import {
  InputField,
  InputIcon,
  InputSlot,
  Input as InputThemed,
  SearchIcon,
  View,
} from '@gluestack-ui/themed';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {}

export const Input = ({
  value,
  onChangeText,
  placeholder = 'Search for users',
}: InputProps) => (
  <View p="$4">
    <InputThemed size="md">
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} color="$warmGray900" />
      </InputSlot>
      <InputField
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        value={value}
        $active-bgColor="$red200"
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </InputThemed>
  </View>
);
