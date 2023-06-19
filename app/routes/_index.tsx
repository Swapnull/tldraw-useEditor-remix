import { ClientOnly } from "remix-utils";
import Editor from "../Editor.client";
import { useEditor } from "@tldraw/tldraw";

export default function Index() {
  return (
    <div>
      <ClientOnly>{() => <Editor />}</ClientOnly>
    </div>
  );
}

/* Comment this out, and the app compiles just fine */
export const SelectedIdsCount = () => {
  const editor = useEditor();

  return <div>{editor.selectedIds.length}</div>;
};
