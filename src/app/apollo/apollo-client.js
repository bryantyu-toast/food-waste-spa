import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache
} from '@apollo/client'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'

import { setContext } from '@apollo/client/link/context'
import { sha256 } from 'crypto-hash'
import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'
import envFromHostname from '@toasttab/env-from-hostname'

import { getAuthenticityToken } from '../utils/authenticity-token'

const environment = envFromHostname(window.location.hostname)
const isDev = environment === 'dev'

let client
const uri = `/api/service/restaurant-metrics-bff/v1/graphql`
// const uri = `http://localhost:31765/v1/graphql`

export const useClient = () => {
  const retryLink = new RetryLink()
  const persistedQueriesLink = createPersistedQueryLink({
    sha256,
    useGETForHashedQueries: true
  })
  const httpLink = new HttpLink({
    uri: uri
  })

  const authLink = setContext((_, { headers }) => {
    const token = getAuthenticityToken()
    return {
      headers: {
        ...headers,
        'authenticity-token': token,
        'x-requested-with': 'XMLHttpRequest',
        credentials: 'same-origin'
      }
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((error) => {})
    }
    if (networkError) {
    }
  })

  const link = ApolloLink.from([
    persistedQueriesLink,
    retryLink,
    authLink,
    errorLink,
    httpLink
  ])

  if (!client) {
    client = new ApolloClient({
      link,
      name: 'restaurant-metrics',
      cache: new InMemoryCache()
    })
  }
  return { client }
}
