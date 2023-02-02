import Editor from "@monaco-editor/react"
import { ReactHTMLElement } from "react"

type CodeProps = {
    handler: (value: string | undefined ) => void
}

export default function Code({handler}: CodeProps ) {

    const defaultValue:string = `for i in range(10): 
    print("Hello World")`
    const changeHandler =  (value: string | undefined)  => {
        handler(value)
    }
    return (
        <div className="border-2 border-back h-4/6 mt- ">
           <Editor
                defaultLanguage="python"
                defaultValue={defaultValue}
                onChange={changeHandler}/>
        </div>
    )
}