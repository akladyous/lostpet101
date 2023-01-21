import { retry } from '@reduxjs/toolkit/query/react';
import { api } from './api';

export const petsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPets: build.query({
      query: (id) => ({ url: id ? `pets/${id}` : 'pets' }),
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
    createPet: build.mutation({
      query: (body) => ({
        url: 'pets',
        method: 'POST',
        body,
      }),
    }),
    updatePet: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `pets/${id}`,
          method: 'PUT',
          body,
        };
      },
    }),
    deletePet: build.mutation({
      query(id) {
        return {
          url: `pets/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetPetsQuery,
  useCreatePetMutation,
  useUpdatePetMutation,
  useDeletePetMutation,
} = petsApi;
