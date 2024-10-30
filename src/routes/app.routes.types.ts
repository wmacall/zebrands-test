export enum AppStackRoutes {
  HOME_SCREEN = 'HomeScreen',
  USERS_SCREEN = 'UsersScreen',
  REPOSITORIES_SCREEN = 'RepositoriesScreen',
}

export type AppStackRouter = {
  [AppStackRoutes.HOME_SCREEN]: undefined;
  [AppStackRoutes.USERS_SCREEN]: undefined;
  [AppStackRoutes.REPOSITORIES_SCREEN]: undefined;
};
