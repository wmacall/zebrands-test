import React from 'react';
import {render} from '@testing-library/react-native';
import {Avatar} from '../src/components/Avatar';
import {TestProvider} from '../src/utils/TestProvider';

describe('Avatar Component', () => {
  it('should render Avatar with image', () => {
    const {getByTestId} = render(
      <TestProvider>
        <Avatar
          uri="https://example.com/avatar.jpg"
          fallbackText="Fallback text"
        />
      </TestProvider>,
    );

    const avatarImage = getByTestId('avatar-image');
    expect(avatarImage).toBeTruthy();
    expect(avatarImage.props.source.uri).toBe('https://example.com/avatar.jpg');
  });

  it('should render Avatar with fallback text', () => {
    const {getByText} = render(
      <TestProvider>
        <Avatar uri="" fallbackText="Fallback text" />
      </TestProvider>,
    );

    const fallbackText = getByText('FT');
    expect(fallbackText).toBeTruthy();
  });
});
