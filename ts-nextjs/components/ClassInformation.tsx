import EditorJsRenderer from "../components/EditorJsRenderer";
type Props = {
    loading: boolean;
    data: any;
}
export default function ClassInformation({loading, data}: Props) {
    if (loading)
      return (
        <div className="border-2 border-back">
          <p>Loading...</p>
        </div>
      );
    if (data) {
      const page = JSON.parse(data.getClass.page);
      console.log(page);
      return (
        <div className="no-scrollbar overflow-y-auto max-w-4xl  h-full border-2 border-back p-4">
          <EditorJsRenderer data={page} />
        </div>
      );
    }
    return (
      <div className=" border-2 border-back">
        <p>Loading...</p>
      </div>
    );
}