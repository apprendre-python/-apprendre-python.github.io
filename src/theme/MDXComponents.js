import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import CodeEditor from '@site/src/components/CodeEditor'
import QuestionInput from '@site/src/components/QuestionInput'

const H = ({ children }) => (
    <span
        className="highlight"
        style={{
            borderRadius: '5px',
            color: 'black',
            paddingLeft: '0.2rem',
            paddingRight: '0.2rem',
        }}>
        {children}
    </span>
);

export default {
    ...MDXComponents,
    H,
    CodeEditor,
    QuestionInput
};
