import { api } from './api';

export const reportsApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchReports: build.mutation({
      query: ({ ...body }) => {
        debugger;
        return {
          url: 'reports/search',
          method: 'POST',
          body,
        };
      },
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
  }),
});

export const { useSearchReportsMutation } = reportsApi;
