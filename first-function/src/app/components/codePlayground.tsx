"use client";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React from 'react';

interface PlaygroundProps {
    code: string;
}
 
const Playground = ( {code}: PlaygroundProps) => {
    function handleOnChange(value?: string) {

    }
    return (
        <Editor theme="vs-dark" height="90vh" defaultLanguage="javascript" defaultValue={code} onChange={handleOnChange} />
    )
}

export default Playground;