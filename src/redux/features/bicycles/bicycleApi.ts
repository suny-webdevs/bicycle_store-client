import { TBicycle, TResponseRedux } from "../../../interface/global";
import { baseApi } from "../../api/baseApi";

const bicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBicycles: builder.query({
      query: () => ({
        url: "/bicycles",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TBicycle[]>) => {
        return {
          data: response.data.data,
          meta: response.data.meta,
        };
      },
    }),
  }),
});

export const { useGetAllBicyclesQuery } = bicycleApi;
