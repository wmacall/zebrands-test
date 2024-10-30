import {AxiosResponse} from 'axios';
import {RepositoriesResponse, UsersResponse} from './types';
import {dispatchRequest} from './dispatchRequest';

export const onSearchUsers = (
  query: string,
): Promise<AxiosResponse<UsersResponse>> =>
  dispatchRequest({
    url: `search/users?q=${query}&per_page=15`,
    method: 'GET',
  });

export const onSearchRepositories = (
  query: string,
): Promise<AxiosResponse<RepositoriesResponse>> =>
  dispatchRequest({
    url: `search/repositories?q=${query}&per_page=15`,
    method: 'GET',
  });
