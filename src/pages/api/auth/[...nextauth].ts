import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.NEXTAUTH_URL,
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signIn: async (user: any, session: any) => {
      // eslint-disable-next-line no-param-reassign
      session.id = user.id
      return Promise.resolve(session)
    },
    redirect: async (_url: string, _baseUrl: string) => {
      return Promise.resolve(`${process.env.NEXT_URL_LOGGED_URL}`)
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
}

export default (request: NextApiRequest, response: NextApiResponse) => {
  NextAuth(request, response, options)
}
