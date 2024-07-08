import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (username) => `/users/${username}`,
    }),
  }),
});

export const { useGetUserQuery } = userAPI;
