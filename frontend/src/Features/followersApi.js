import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const followersAPI = createApi({
  reducerPath: 'followersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUserFollowers: builder.query({
      query: (username) => `/users/${username}/followers`,
    }),
  }),
});

export const { useGetUserFollowersQuery } = followersAPI;
