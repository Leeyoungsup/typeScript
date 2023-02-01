import { useQuery, NetworkStatus } from '@apollo/client'
import { CLASS_LIST } from '../graphql/queries/ClassQueries'
import { addApolloState, initializeApollo } from '../lib/apolloClient'
import Class from './Class'
import ErrorMessage from './ErrorMessage'
import Page from '../components/layout/LayoutDefault'
import Router from 'next/router'
type ClassTypes = {
    id: String,
    title: String,
    description: String,
    start: String,
    end: String,
    teacher: User ,
    progress: number,
    page: String
}

type User  = {
    name: String
  }

export default function ClassList() {
    const { loading, error, data } = useQuery(
        CLASS_LIST,
      )
    if (data){
        return (
          <Page>
            <button
              type="button"
              onClick={() => Router.push("/addClass")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                ></path>
              </svg>
              New Class
            </button>
            <div>
              {data.classList.map((item: ClassTypes, index: number) => (
                <Class {...item} key={index} />
              ))}
            </div>
          </Page>
        );
       
    } 
    if (error) return <ErrorMessage message="Error loading posts." />
    if (loading) return <div>Loading</div>
 return <div>ClassList</div>
}
export async function getStaticProps() {
    const apolloClient = initializeApollo()
  
    await apolloClient.query({
      query: CLASS_LIST,
    })
  
    return addApolloState(apolloClient, {
      props: {},
    })
  }