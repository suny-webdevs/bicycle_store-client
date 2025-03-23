import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
