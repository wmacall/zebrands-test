import React from 'react';
import {ListRenderItem} from 'react-native';
import {RepositoryRow, SearchScreen} from '../../components';
import {Repository} from '../../api';
import {useGithubSearch} from '../../hooks';

export const RepositoriesScreen = () => {
  const {searchQuery, repositories, onSearchRepository, isLoading, hasError} =
    useGithubSearch();
  const renderItem: ListRenderItem<Repository> = ({item}) => (
    <RepositoryRow {...item} />
  );

  return (
    <SearchScreen
      title="Repositories"
      placeholder="Search repositories"
      searchQuery={searchQuery}
      data={repositories}
      onSearch={onSearchRepository}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      isLoading={isLoading}
      hasError={hasError}
    />
  );
};
