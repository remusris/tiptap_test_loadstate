import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TextEditor = ({ initialContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: initialContent,
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
};

export default TextEditor;
