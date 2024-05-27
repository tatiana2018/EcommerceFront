import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export const ImageUpload = ({saveImageFile}) => {
    const [imagePreview, setImagePreview] = useState(null); 
     

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            saveImageFile(file)
        }
    };

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]); // 

    return (
        <div>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {imagePreview && (
                <div>
                    <h3>Vista Previa de la Imagen</h3>
                    <img src={imagePreview} alt="Vista previa" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
};


ImageUpload.propTypes = {
    saveImageFile: PropTypes.func
}