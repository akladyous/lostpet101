import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['api'],
  endpoints: () => ({}),
});