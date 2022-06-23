import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8bvso175p01xm1ikr6v56/master',
  cache: new InMemoryCache()
})


// Remover o cache
// import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

// const defaultOptions: DefaultOptions = {


//   watchQuery: {
//     fetchPolicy: "no-cache",
//     errorPolicy: "ignore",
//   },
//   query: {
//     fetchPolicy: "no-cache",
//     errorPolicy: "all",
//   },
// };

// export const client = new ApolloClient({
//   uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8bvso175p01xm1ikr6v56/master',
//   cache: new InMemoryCache(),
//   defaultOptions: defaultOptions,
// });