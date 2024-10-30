import React from 'react';
import {useGithubSearch} from '../../hooks';
import {User} from '../../api';
import {ListRenderItem} from 'react-native';
import {SearchScreen, UserRow} from '../../components';

export const UsersScreen = () => {
  const {searchQuery, users, onSearchUser, isLoading} = useGithubSearch();

  const renderItem: ListRenderItem<User> = ({item}) => <UserRow {...item} />;

  return (
    <SearchScreen
      title="Users"
      placeholder="Search users"
      searchQuery={searchQuery}
      data={users}
      onSearch={onSearchUser}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      isLoading={isLoading}
    />
  );
};
