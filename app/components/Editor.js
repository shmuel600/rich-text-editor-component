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
                // { 'align': [false] },
                // { 'align': 'justify' },
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
            <button
                onClick={() =>
                    console.log(content
                        .replaceAll(`class="ql-align-center"`, `style="textAlign: center;"`)
                        .replaceAll(`class="ql-align-right"`, `style="textAlign: right;"`)
                        .replaceAll(`class="ql-align-left"`, `style="textAlign: left;"`)

                        .replaceAll(`class="ql-size-small"`, `style="fontSize: small;"`)
                        .replaceAll(`class="ql-size-large"`, `style="fontSize: large;"`)
                        .replaceAll(`class="ql-size-huge"`, `style="fontSize: larger;"`)
                    )}
            >
                log
            </button>
            <div
                className={styles.preview}
                dangerouslySetInnerHTML={{
                    __html: content

                        .replaceAll(`class="ql-align-center"`, `style="text-align: center;"`)
                        .replaceAll(`class="ql-align-right"`, `style="text-align: right;"`)
                        .replaceAll(`class="ql-align-left"`, `style="text-align: left;"`)

                        .replaceAll(`class="ql-size-small"`, `style="font-size: small;"`)
                        .replaceAll(`class="ql-size-large"`, `style="font-size: x-large;"`)
                        .replaceAll(`class="ql-size-huge"`, `style="font-size: xx-large;"`)

                }}
            >
            </div>
        </>
    );
};

export default RichTextEditor;
