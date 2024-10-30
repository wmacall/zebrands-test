import React from 'react';
import {render} from '@testing-library/react-native';
import {UserRow} from '../src/components';
import {TestProvider} from '../src/utils/TestProvider';

describe('UserRow Component', () => {
  const mockUser = {
    login: 'wmacall',
    id: 49074367,
    node_id: 'MDQ6VXNlcjQ5MDc0MzY3',
    avatar_url: 'https://avatars.githubusercontent.com/u/49074367?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/wmacall',
    html_url: 'https://github.com/wmacall',
    followers_url: 'https://api.github.com/users/wmacall/followers',
    following_url:
      'https://api.github.com/users/wmacall/following{/other_user}',
    gists_url: 'https://api.github.com/users/wmacall/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/wmacall/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/wmacall/subscriptions',
    organizations_url: 'https://api.github.com/users/wmacall/orgs',
    repos_url: 'https://api.github.com/users/wmacall/repos',
    events_url: 'https://api.github.com/users/wmacall/events{/privacy}',
    received_events_url: 'https://api.github.com/users/wmacall/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
    score: 1.0,
  };

  it('should render UserRow with avatar and text', () => {
    const {getByText, getByTestId} = render(
      <TestProvider>
        <UserRow {...mockUser} />
      </TestProvider>,
    );

    const avatarImage = getByTestId('avatar-image');
    expect(avatarImage).toBeDefined();
    expect(avatarImage.props.source.uri).toBe(mockUser.avatar_url);

    const userName = getByText(mockUser.login);
    expect(userName).toBeDefined();
    const userScore = getByText(`Score: ${mockUser.score}`);
    expect(userScore).toBeDefined();
  });

  it('should render fallback text when avatar URL is empty', () => {
    const {getByText} = render(<UserRow {...mockUser} avatar_url="" />);

    const fallbackText = getByText('W');
    expect(fallbackText).toBeDefined();
  });
});
