"use client";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React from 'react';

interface PlaygroundProps {
    code: string;
}
 
const Playground = ( {code}: PlaygroundProps) => {
    return (
        <Editor theme="vs-light" height="90vh" defaultLanguage="javascript" defaultValue={code} />
    )
}

export default Playground;