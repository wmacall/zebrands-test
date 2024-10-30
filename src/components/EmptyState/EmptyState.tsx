import React from 'react';
import {Center, Heading, Image} from '@gluestack-ui/themed';

interface EmptyStateProps {
  hasSearched?: boolean;
}

export const EmptyState = ({hasSearched}: EmptyStateProps) => {
  return (
    <Center testID="empty-search" flex={1} gap="$16">
      <Image
        w={100}
        h={100}
        source={require('../../assets/empty.png')}
        alt="Empty search"
      />
      <Heading color="$warmGray700">
        {hasSearched ? 'Nothing to show' : 'Start searching'}
      </Heading>
    </Center>
  );
};
