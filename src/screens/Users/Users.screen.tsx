import React from 'react';
import {View} from '@gluestack-ui/themed';
import {Header, Input} from '../../components';
import {useGithubSearch} from '../../hooks';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';
import {User} from '../../api';
import {UserRow} from '../../components/UserRow';

export const UsersScreen = () => {
  const {searchQuery, users, onSearchUser} = useGithubSearch();

  const renderItem: ListRenderItem<User> = ({item}) => <UserRow {...item} />;

  const flatListStyle: ViewStyle = {
    flex: users.length === 0 ? 1 : undefined,
    paddingBottom: 52,
  };

  return (
    <View flex={1}>
      <Header />
      <Input value={searchQuery} onChangeText={onSearchUser} />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={flatListStyle}
      />
    </View>
  );
};
