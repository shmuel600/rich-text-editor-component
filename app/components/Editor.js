'use client';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styles from './Editor.module.css'
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
    const [content, setContent] = useState('');

    const modules = {
        toolbar: [
            // [{ 'font': [] }],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image'],
            [{ 'color': [] }],
            [
                { 'align': 'justify' },
                { 'align': 'center' },
                { 'align': 'right' },
            ],
            // [{ 'direction': 'rtl' }],
        ],
    };

    const formats = [
        // 'font',
        'header',
        'size',
        'bold', 'italic', 'underline', 'strike',
        'link', 'image', 'color',
        'align',
        // 'direction'
    ];

    return (
        <>
            <div
                className={styles.quill}
            >
                {/* when in edit mode */}
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={content}
                    onChange={setContent}
                    style={{ height: '60vh', marginBottom: '7vh' }}
                // className='.ql-align-right, .ql-direction-rtl'
                />
            </div>
            {/* when not in edit mode */}
            <button onClick={() => console.log(content)}>
                log
            </button>
            <div
                className={styles.preview}
                dangerouslySetInnerHTML={{ __html: content }}
            >
            </div>
        </>
    );
};

export default RichTextEditor;
