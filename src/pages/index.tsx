import TextEditor from "@/components/TextEditor";
import useContentStore from "@/zustand/ContentStore";
import { useEffect, useState } from "react";

export default function Home() {
  const editorContent = useContentStore((state) => state.content);
  const setEditorContent = useContentStore((state) => state.setContent);

  const [randomState, setRandomState] = useState("");

  useEffect(() => {
    setRandomState(`<p>This is default content</p>`);
    console.log("randomState", randomState);
  }, [randomState]);

  useEffect(() => {
    setEditorContent(`<p>This is default content</p>`);
    console.log("editorContent", editorContent);
  }, [editorContent]);

  const defaultContent = `<p>This is default content</p>`;

  return <TextEditor initialContent={randomState}></TextEditor>;
}

/* import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import useContentStore from "@/zustand/ContentStore"; // Import the Zustand hook

const TextEditor = () => {
  const editorContent = useContentStore(state => state.content); // Access the editor content from Zustand

  const editor = useEditor({
    extensions: [StarterKit],
    content: editorContent, // Initialize the editor with content from Zustand
  });

  useEffect(() => {
    if (editor && editorContent !== null) {
      // Update the editor's content whenever the Zustand state changes
      editor.commands.setContent(editorContent);
    }
  }, [editorContent, editor]); // Listen for changes to both `editorContent` and `editor`

  useEffect(() => {
    // Cleanup on component unmount
    return () => editor?.destroy();
  }, [editor]);

  if (!editor) {
    return null; // Return null while the editor is not initialized
  }

  return <EditorContent editor={editor} />;
};

export default TextEditor;
 */
