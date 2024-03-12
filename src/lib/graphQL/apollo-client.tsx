import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client:any = new ApolloClient<any>({
    uri:"http://127.0.0.1:8000/graphql",
    cache: new InMemoryCache()
})

export default client;
 // link: new HttpLink({   
    //     uri:'http://127.0.0.1:8000/graphql/'
    // }),