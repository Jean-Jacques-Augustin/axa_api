import React from 'react';

const ImageComponent = ({ label, name }) => {
    return (
        <div>
            <label htmlFor={name}>{label} :</label>
            <input type="file" id={name} name={name} accept="image/*" />
        </div>
    );
};

export default ImageComponent;
