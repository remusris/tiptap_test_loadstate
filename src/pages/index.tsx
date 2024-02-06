import TextEditor from "@/components/TextEditor"
import useContentStore from "@/zustand/ContentStore"

export default function Home() {
  const editorContent = useContentStore((state) => state.content)
  const setEditorContent = useContentStore((state) => state.setContent)

  setEditorContent(`<p>This is default content</p>`)

  const defaultContent=`<p>This is default content</p>`

  return (
  <TextEditor initialContent={editorContent}></TextEditor>
  );
}
