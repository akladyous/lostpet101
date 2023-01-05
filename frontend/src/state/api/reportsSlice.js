import { apiSlice } from './apiSlice.js';

export const reportsSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    showReports: build.query({
      query: (id) => {
        // debugger;
        return id ? `reports/${id}` : 'reports';
      },
      transformErrorResponse: (response, meta, args) => {
        if (response.error?.reponse) {
          return response.error.response.data;
        } else {
          return response.error;
        }
      },
      keepUnusedDataFor: 5,
    }),
    searchReports: build.mutation({
      query: (body) => ({
        url: 'reports/search',
        method: 'POST',
        body,
      }),
      transformErrorResponse: (response, meta, args) => {
        if (response.error?.reponse) {
          return response.error.response.data;
        } else {
          return response.error;
        }
      },
      keepUnusedDataFor: 5,
    }),
    createReport: build.mutation({
      query: (body) => ({
        url: 'reports',
        method: 'POST',
        body: { body },
      }),
      keepUnusedDataFor: 5,
    }),
    updateReport: build.mutation({
      query: (userData) => ({
        url: (id) => `reports/${id}`,
        method: 'PATCH',
        body: { ...userData },
      }),
      keepUnusedDataFor: 5,
    }),
    deleteReport: build.mutation({
      query: () => ({
        url: '/users/signout',
        method: 'DELETE',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
  overrideExisting: true,
});
export const {
  useShowReportsQuery,
  useSearchReportsMutation,
  useCreateReportMutation,
  useUpdateReportMutation,
  useDeleteReportMutation,
} = reportsSlice;
