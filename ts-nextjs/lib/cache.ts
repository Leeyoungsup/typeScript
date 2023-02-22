import { InMemoryCache, Reference, makeVar } from "@apollo/client";
import { getFromStorage } from "./localstorage";

export const isLoggedInVar = makeVar<boolean>( !!getFromStorage('token') )
 

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
        },
      },
    },
  });