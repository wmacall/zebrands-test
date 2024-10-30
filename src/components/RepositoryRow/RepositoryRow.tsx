import React from 'react';
import {Repository} from '../../api';
import {
  Badge,
  BadgeText,
  Divider,
  Heading,
  Text,
  View,
} from '@gluestack-ui/themed';
import {Avatar} from '../Avatar';

interface RepositoryRowProps extends Repository {}
const actions = ['success', 'error', 'info', 'muted', 'warning'];
type Actions = 'success' | 'error' | 'info' | 'muted' | 'warning';

const getRandomAction = (): Actions => {
  const randomIndex = Math.floor(Math.random() * actions.length);
  return actions[randomIndex] as Actions;
};

export const RepositoryRow = (repository: RepositoryRowProps) => {
  return (
    <>
      <View py="$4" px="$4">
        <View flexDirection="row" alignItems="center" gap="$4">
          <Avatar
            uri={repository.owner.avatar_url}
            fallbackText={repository.owner.login}
          />
          <Heading>{repository.owner.login}</Heading>
        </View>
        {repository.description ? (
          <Text size="sm" fontStyle="italic" py="$2">
            {repository.description}
          </Text>
        ) : null}
        {repository.language ? (
          <Text fontWeight="$bold" pb="$2">
            {repository.language}
          </Text>
        ) : null}
        {repository.topics.length > 0 ? (
          <View flexDirection="row" flexWrap="wrap" gap="$2" pb="$2">
            {repository.topics.map((topic, index) => (
              <Badge
                key={`${topic}-${index}`}
                size="md"
                action={getRandomAction()}
                borderRadius="$none">
                <BadgeText textTransform="lowercase">{topic}</BadgeText>
              </Badge>
            ))}
          </View>
        ) : null}
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text fontSize="$xs" color="$red500" fontWeight="bold">
            Open issues: {repository.open_issues_count}
          </Text>
          <Text fontSize="$xs" fontWeight="$bold">
            Forks: {repository.forks_count}
          </Text>
          <Text fontSize="$xs" color="$blue500" fontWeight="$bold">
            Watchers: {repository.watchers_count}
          </Text>
        </View>
      </View>
      <Divider />
    </>
  );
};
