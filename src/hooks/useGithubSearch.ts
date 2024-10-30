import {useState} from 'react';
import {onSearchUsers, onSearchRepositories, Repository, User} from '../api';

let debounceTimeout: NodeJS.Timeout;

const debounce = (callback: () => void, delay: number = 1000) => {
  debounceTimeout = setTimeout(callback, delay);
};

export const useGithubSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [users, setUsers] = useState<User[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [hasError, setHasError] = useState(false);

  const onSearchUser = (query: string) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    setIsLoading(true);
    setSearchQuery(query);
    setHasError(false);

    if (query.trim() === '') {
      console.log('here');
      setUsers([]);
      setIsLoading(false);
      return;
    }

    debounce(async () => {
      try {
        const response = await onSearchUsers(query);
        setUsers(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
        setSearchResults([]);
        setIsLoading(false);
        setHasError(true);
      }
    });
  };

  const onSearchRepository = (query: string) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    setIsLoading(true);
    setSearchQuery(query);
    setHasError(false);

    if (query.trim() === '') {
      setRepositories([]);
      setIsLoading(false);
      return;
    }

    debounce(async () => {
      try {
        const response = await onSearchRepositories(query);
        setRepositories(response.data.items);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setRepositories([]);
        setIsLoading(false);
        setHasError(true);
      }
    });
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    onSearchUser,
    users,
    onSearchRepository,
    repositories,
    hasError,
  };
};
