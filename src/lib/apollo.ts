import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8bvso175p01xm1ikr6v56/master',
  cache: new InMemoryCache()
})