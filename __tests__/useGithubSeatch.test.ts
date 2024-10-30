import {renderHook, act} from '@testing-library/react-hooks';
import {useGithubSearch} from '../src/hooks';
import {onSearchRepositories, onSearchUsers} from '../src/api';

jest.mock('../src/api', () => ({
  onSearchRepositories: jest.fn(),
  onSearchUsers: jest.fn(),
}));

describe('useGithubSearch hook: search repository', () => {
  it('should set loading to true when repository search is initiated', () => {
    const {result} = renderHook(() => useGithubSearch());
    act(() => {
      result.current.onSearchRepository('demo-todo-');
    });
    expect(result.current.isLoading).toBe(true);
  });

  it("should return empty array if user's search is empty", () => {
    const {result} = renderHook(() => useGithubSearch());
    act(() => {
      result.current.onSearchRepository('');
    });
    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle API response and set repositories correctly', async () => {
    const mockRepositories = {
      data: {
        items: [
          {
            id: 352349362,
            name: 'demo-todo-with-react',
            full_name: 'appwrite/demo-todo-with-react',
            owner: {
              login: 'appwrite',
              id: 25003669,
              avatar_url:
                'https://avatars.githubusercontent.com/u/25003669?v=4',
            },
            description:
              'A basic demo example for integrating between Appwrite & React JS 💙',
            language: 'JavaScript',
            stargazers_count: 199,
            forks_count: 127,
            score: 1.0,
          },
        ],
      },
    };

    (onSearchRepositories as jest.Mock).mockResolvedValue(mockRepositories);
    const {result, waitForNextUpdate} = renderHook(() => useGithubSearch());

    act(() => {
      result.current.onSearchRepository('todo-app');
    });

    await waitForNextUpdate();
    expect(result.current.repositories).toEqual(mockRepositories.data.items);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle repository search errors', async () => {
    (onSearchRepositories as jest.Mock).mockRejectedValue(new Error('Error'));
    const {result, waitForNextUpdate} = renderHook(() => useGithubSearch());

    act(() => {
      result.current.onSearchRepository('todo-app');
    });

    await waitForNextUpdate();
    expect(result.current.hasError).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });
});

describe('useGithubSearch hook: search users', () => {
  it('should set loading to true when user search is initiated', () => {
    const {result} = renderHook(() => useGithubSearch());
    act(() => {
      result.current.onSearchUser('testUser');
    });
    expect(result.current.isLoading).toBe(true);
  });

  it("should return empty array if user's search is empty", () => {
    const {result} = renderHook(() => useGithubSearch());
    act(() => {
      result.current.onSearchUser('');
    });
    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle API response and set users correctly', async () => {
    const mockUsers = {data: {items: [{id: 1, login: 'user1'}]}};
    (onSearchUsers as jest.Mock).mockResolvedValue(mockUsers);
    const {result, waitForNextUpdate} = renderHook(() => useGithubSearch());

    act(() => {
      result.current.onSearchUser('user');
    });

    await waitForNextUpdate();
    expect(result.current.users).toEqual(mockUsers.data.items);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle user search errors', async () => {
    (onSearchUsers as jest.Mock).mockRejectedValue(new Error('Error'));
    const {result, waitForNextUpdate} = renderHook(() => useGithubSearch());

    act(() => {
      result.current.onSearchUser('user');
    });

    await waitForNextUpdate();
    expect(result.current.hasError).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });
});
