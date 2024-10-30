import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchScreen} from '../src/components';
import {TestProvider} from '../src/utils/TestProvider';
import {Text} from '@gluestack-ui/themed';

describe('SearchScreen Component', () => {
  const mockData = [{id: '1', name: 'Test Item'}];
  const mockRenderItem = ({item}: {item: {id: string; name: string}}) => (
    <Text>{item.name}</Text>
  );
  const mockKeyExtractor = (item: {id: string}) => item.id;
  const mockOnSearch = jest.fn();

  it('should render Header and Input with placeholder', () => {
    const {getByPlaceholderText, getByText} = render(
      <TestProvider>
        <SearchScreen
          title="Test Title"
          placeholder="Search here..."
          searchQuery=""
          data={[]}
          onSearch={mockOnSearch}
          renderItem={mockRenderItem}
          keyExtractor={mockKeyExtractor}
        />
      </TestProvider>,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByPlaceholderText('Search here...')).toBeTruthy();
  });

  it('should call onSearch when input text changes', () => {
    const {getByPlaceholderText} = render(
      <TestProvider>
        <SearchScreen
          placeholder="Search here..."
          searchQuery=""
          data={[]}
          onSearch={mockOnSearch}
          renderItem={mockRenderItem}
          keyExtractor={mockKeyExtractor}
        />
      </TestProvider>,
    );

    fireEvent.changeText(getByPlaceholderText('Search here...'), 'new query');
    expect(mockOnSearch).toHaveBeenCalledWith('new query');
  });

  it('should show Spinner when isLoading is true', () => {
    const {getByTestId} = render(
      <TestProvider>
        <SearchScreen
          placeholder="Search here..."
          searchQuery=""
          data={[]}
          onSearch={mockOnSearch}
          renderItem={mockRenderItem}
          keyExtractor={mockKeyExtractor}
          isLoading
        />
      </TestProvider>,
    );

    expect(getByTestId('spinner-search')).toBeDefined();
  });

  it('should display ErrorComponent when hasError is true', () => {
    const {getByTestId} = render(
      <TestProvider>
        <SearchScreen
          placeholder="Search here..."
          searchQuery=""
          data={[]}
          onSearch={mockOnSearch}
          renderItem={mockRenderItem}
          keyExtractor={mockKeyExtractor}
          hasError
        />
      </TestProvider>,
    );

    expect(getByTestId('error-search')).toBeDefined();
  });

  it('should render FlatList with data when available', async () => {
    const {getByText} = render(
      <TestProvider>
        <SearchScreen
          placeholder="Search here..."
          searchQuery=""
          data={mockData}
          onSearch={mockOnSearch}
          renderItem={mockRenderItem}
          keyExtractor={mockKeyExtractor}
          isLoading={false}
          hasError={false}
        />
      </TestProvider>,
    );

    expect(getByText('Test Item')).toBeDefined();
  });

  it('should render EmptyState when data is empty and search query exists', () => {
    const {getByTestId} = render(
      <TestProvider>
        <SearchScreen
          placeholder="Search here..."
          searchQuery="searching"
          data={[]}
          onSearch={mockOnSearch}
          renderItem={mockRenderItem}
          keyExtractor={mockKeyExtractor}
        />
      </TestProvider>,
    );

    expect(getByTestId('empty-search')).toBeDefined();
  });
});
