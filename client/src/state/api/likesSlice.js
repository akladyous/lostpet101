import { api } from './api';

export const likesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLikes: build.query({
      query: (id) => ({ url: `pets/${id}/likes` }),
      transformErrorResponse: (response, meta, args) => {
        if (response.error?.reponse) {
          return response.error.response;
        } else {
          return {
            error: response.error ? response.error : response.data.error,
            status: response.status,
          };
        }
      },
      keepUnusedDataFor: 5,
    }),
    like: build.mutation({
      query: (id) => ({
        url: `pets/${id}/likes`,
        method: 'POST',
      }),
    }),
    dislike: build.mutation({
      query(id) {
        return {
          url: `pets/${id}/likes`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetLikesQuery,
  useLazyGetLikesQuery,
  useLikeMutation,
  useDislikeMutation,
} = likesApi;
