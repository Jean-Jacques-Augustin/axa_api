import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WysiwygEditorComponent = ({ label, name }) => {
    return (
        <div>
            <label>{label} :</label>
            <ReactQuill id={name} name={name} />
        </div>
    );
};

export default WysiwygEditorComponent;
