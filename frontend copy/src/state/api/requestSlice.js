import { apiSlice } from './apiSlice.js';

export const requestSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    get: build.query({
      query: (url) => ({ url: url }),
      transformErrorResponse: (response) => {
        if (response.error?.reponse) {
          return response.error.response.data;
        } else {
          return response.error;
        }
      },
      keepUnusedDataFor: 5,
      providesTags: ['request'],
    }),
  }),

  overrideExisting: true,
});

export const { useGetQuery, useLazyGetQuery } = requestSlice;
