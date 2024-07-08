import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { userAPI } from '../Features/userApi';
import { reposAPI } from '../Features/reposApi';
import { followersAPI } from '../Features/followersApi';

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [reposAPI.reducerPath]: reposAPI.reducer,
    [followersAPI.reducerPath]: followersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      reposAPI.middleware,
      followersAPI.middleware
    ),
});

setupListeners(store.dispatch);

export var RootState = store.getState;
export var AppDispatch = store.dispatch;
