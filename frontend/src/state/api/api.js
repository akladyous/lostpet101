import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://www.lostpet101.net',
  prepareHeaders(headers) {
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  },
  // credentials: 'include',
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['api'],
  endpoints: () => ({}),
});
// baseUrl: 'http://localhost:3000/',
