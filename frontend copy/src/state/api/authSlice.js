import { apiSlice } from './apiSlice.js';

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ email, password }) => ({
        url: '/users/signin',
        method: 'POST',
        body: { email, password },
      }),
      keepUnusedDataFor: 5,
    }),
    signOut: build.mutation({
      query: () => ({
        url: '/users/signout',
        method: 'DELETE',
      }),
      keepUnusedDataFor: 5,
    }),
    signUp: build.mutation({
      query: ({ email, password, password_confirmation }) => ({
        url: '/users/signup',
        method: 'POST',
        headers: { 'content-type': 'multipart/form-data' },
        body: { email, password, password_confirmation },
      }),
      keepUnusedDataFor: 5,
    }),
    updatePassword: build.mutation({
      query: (userData) => ({
        url: '/users/update_password',
        method: 'PATCH',
        body: { ...userData },
      }),
      keepUnusedDataFor: 5,
    }),
    resetPassword: build.mutation({
      query: (userData) => ({
        url: '/users/reset_password',
        method: 'PATCH',
        body: { ...userData },
      }),
      keepUnusedDataFor: 5,
    }),
    deleteUser: build.mutation({
      query: () => ({
        url: `users/cancel`,
        method: 'DELETE',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
  overrideExisting: true,
});

export const {
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useResetPasswordMutation,
  useDeleteUserMutation,
} = authSlice;
