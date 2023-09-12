import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/auth" }),
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData
      })
    }),
    signin: builder.mutation({
      query: (userData) => ({
        url: "/signin",
        method: "POST",
        body: userData
      }),

    })
  })
})

export const { useSignupMutation, useSigninMutation } = authApi;
