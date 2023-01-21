import { api } from './api';

export const reportsApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchReports: build.mutation({
      query: ({ ...body }) => {
        return {
          url: 'reports/search',
          method: 'POST',
          body,
        };
      },

      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useSearchReportsMutation } = reportsApi;
