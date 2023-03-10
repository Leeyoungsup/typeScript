import { OutputData } from "@editorjs/editorjs";
import React from "react";
//use require since editorjs-html doesn't have types
const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();
type Props = {
  data: OutputData;
};
type ParsedContent = string | JSX.Element;
const EditorJsRenderer = ({ data }: Props) => {
  const html = EditorJsToHtml.parse(data) as ParsedContent[];
  return (
    <div className="prose max-w-full ">
      {html.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
};
export default EditorJsRenderer;