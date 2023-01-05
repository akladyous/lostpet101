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
    post: build.mutation({
      query: ({ url, body }) => {
        return {
          url: url,
          method: 'POST',
          body: body,
        };
      },
      transformErrorResponse: (response) => {
        if (response.error?.reponse) {
          return response.error.response.data;
        } else {
          return response.error;
        }
      },
    }),
    patch: build.mutation({
      query: ({ url, body }) => ({
        url: url,
        method: 'PATCH',
        body,
      }),
    }),
    delete: build.mutation({
      query: (url) => ({
        url: url,
        method: 'DELETE',
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetQuery,
  usePostMutation,
  usePatchMutation,
  useDeleteMutation,
} = requestSlice;
