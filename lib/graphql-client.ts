import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
    process.env.GRAPHQL_URL as string, 
    {
        headers: {
            "Authorization" : `Bearer ${process.env.GRAPHQL_TOKEN}`
        }, 
    }
);