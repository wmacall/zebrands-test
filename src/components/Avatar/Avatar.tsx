import React from 'react';
import {
  Avatar as AvatarThemed,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui/themed';

interface AvatarProps {
  uri: string;
  fallbackText: string;
}

export const Avatar = ({uri, fallbackText}: AvatarProps) => (
  <AvatarThemed bgColor="$blueGray300" size="sm" borderRadius="$full">
    <AvatarFallbackText>{fallbackText}</AvatarFallbackText>
    <AvatarImage testID="avatar-image" source={{uri}} alt={fallbackText} />
  </AvatarThemed>
);
