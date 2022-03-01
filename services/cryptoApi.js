import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': "f931866bf7msh4779fe28087fc77p1c784bjsn86302e7811ea",
};
const baseUrl = "https://coinranking1.p.rapidapi.com"
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ id, timeperiod }) => createRequest(`coin/${id}/history?timeperiod=${timeperiod}`),
    }),

    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
//  https://coinranking1.p.rapidapi.com/coins?limit=10