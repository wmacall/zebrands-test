import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';
import {Spinner, View} from '@gluestack-ui/themed';
import {Header, Input} from '../../components';
import {ErrorComponent} from '../ErrorComponent';
import {EmptyState} from '../EmptyState';

interface Props<T> {
  title?: string;
  placeholder: string;
  searchQuery: string;
  data: T[];
  onSearch: (query: string) => void;
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T) => string;
  isLoading?: boolean;
  hasError?: boolean;
}

export const SearchScreen = <T,>({
  title,
  placeholder,
  searchQuery,
  data,
  onSearch,
  renderItem,
  keyExtractor,
  isLoading = false,
  hasError = false,
}: Props<T>) => {
  const flatListStyle: ViewStyle = {
    flex: data.length === 0 ? 1 : undefined,
    paddingBottom: 52,
  };

  return (
    <View flex={1}>
      <Header title={title} />
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={onSearch}
      />
      {hasError ? <ErrorComponent /> : null}
      {isLoading ? (
        <Spinner testID="spinner-search" color="$warmGray700" size="small" />
      ) : null}
      {!isLoading && !hasError ? (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={flatListStyle}
          ListEmptyComponent={<EmptyState hasSearched={searchQuery !== ''} />}
        />
      ) : null}
    </View>
  );
};
