import React, { useState } from "react";
import { useMutation } from "@apollo/client"
import { EXUCUTE_CODE } from "../graphql/mutations/CodeMutations"

type ToolsPanelProps = {
  code: string | undefined;
};

export default function ToolsPanel({code}: ToolsPanelProps ) {

  const [submitCode, {data}] = useMutation(EXUCUTE_CODE, {
    variables: {code: code}
})

  const runHandler = ( event:any ) => {
    event.preventDefault()
    submitCode()
  }

  return (
    <div className="border-2 border-back flex justify-end">
        <div className="p-2 pr-10">
      <button
        onClick={runHandler}
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
      </div>
    </div>
  );
}
