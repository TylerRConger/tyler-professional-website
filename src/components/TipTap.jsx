'use client'

import { BubbleMenu, useEditor, EditorContent } from '@tiptap/react'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Blockquote from '@tiptap/extension-blockquote'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import CodeBlock from '@tiptap/extension-code-block'

import React, { useEffect, useImperativeHandle, forwardRef, useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faCode, faLink, faStrikethrough, faUnderline, faItalic, faBold, faTimes } from "@fortawesome/free-solid-svg-icons"

const Tiptap = forwardRef((props, ref) => {
  const [isEditable, setIsEditable] = React.useState(true)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      HorizontalRule,
      Blockquote,
      BulletList,
      ListItem,
      Paragraph,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      OrderedList,
      CodeBlock
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'bg-white text-base m-2 focus:outline-none',
      },
    },
    onUpdate({ editor }) {
      setState(editor.getHTML());
    },
  })

  function setState(content) {
    // TODO: Maybe look into storing in cookies and writing to DB once per X amount of time
    // console.log(content)
  }

  useImperativeHandle(ref, () => ({
    getContent: () => {
      return editor?.getHTML();
    },
    setEditable: (editable) => {
      setIsEditable(editable);
    }
  }));

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addImage = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleSubmit = () => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
      setShowModal(false);
    }
  };

  const handleClose = () => {
    setShowModal(false); // Close modal without doing anything
    setUrl(''); // Clear the input field in case something was entered
  };

  if (!editor) {
    return null
  }

  return (
<div className='text-black'>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu divide-x-2 divide-slate-300 border-2 rounded">
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
              >
                <FontAwesomeIcon icon={faBold} />
              </button>
            </div>
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
              >
                <FontAwesomeIcon icon={faItalic} />
              </button>
            </div>
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
              >
                <FontAwesomeIcon icon={faStrikethrough} />
              </button>
            </div>
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}
              >
                <FontAwesomeIcon icon={faUnderline} />
              </button>
            </div>
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button onClick={addImage}>
                <FontAwesomeIcon icon={faImage} />
              </button>
            </div>
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button
                onClick={() => editor.chain().focus().setCodeBlock().run()}
                className={editor.isActive('code') ? 'is-active' : ''}
              >
                <FontAwesomeIcon icon={faCode} />
              </button>
            </div>
            <div className="bg-cover bg-white p-1 rounded display: inline hover:bg-slate-300">
              <button onClick={() => editor.chain().focus().setCodeBlock().run()}>
                <FontAwesomeIcon icon={faLink} />
              </button>
            </div>
          </div>
        </BubbleMenu>
      )}
      {showModal && (
        <div className="fixed top-20 left-0 w-full h-screen flex items-start justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 mt-4 rounded shadow-lg relative">
            {/* X Button to close the modal */}
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className='pt-6'></div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter image URL"
              className="border p-2 rounded w-full"
            />
           
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white p-2 mt-2 rounded w-full"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <EditorContent editor={editor} />
    </div>
  );
});

export default Tiptap
