import React from 'react';
import {Heading, Pressable, Text, View} from '@gluestack-ui/themed';
import {Avatar} from '../Avatar';
import {User} from '../../api';

interface UserRowProps extends User {}

export const UserRow = ({...user}: UserRowProps) => {
  return (
    <Pressable flexDirection="row" alignItems="center" py="$2" px="$4">
      <Avatar uri={user.avatar_url} fallbackText={user.login} />
      <View pl="$4">
        <Heading>{user.login}</Heading>
        <Text size="xs">Score: {user.score}</Text>
      </View>
    </Pressable>
  );
};
