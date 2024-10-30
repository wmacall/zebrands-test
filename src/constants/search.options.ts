import {AppStackRoutes} from '../routes';

interface SearchOptions {
  label: string;
  value: AppStackRoutes;
  id: number;
}

export const SEARCH_OPTIONS: SearchOptions[] = [
  {id: 1, label: 'Search Users', value: AppStackRoutes.USERS_SCREEN},
  {
    id: 2,
    label: 'Search Repositories',
    value: AppStackRoutes.REPOSITORIES_SCREEN,
  },
];
