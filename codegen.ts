import { CodegenConfig } from "@graphql-codegen/cli";

const url = process.env.GRAPHQL_URL as string;
const token = process.env.GRAPHQL_TOKEN as string;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
      },
    },
  ],
  documents: ["app/**/*.tsx", "app/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;