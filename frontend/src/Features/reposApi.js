import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reposAPI = createApi({
  reducerPath: 'reposAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUserRepos: builder.query({
      query: (username) => `/users/${username}/repos`,
    }),
  }),
});

export const { useGetUserReposQuery } = reposAPI;
