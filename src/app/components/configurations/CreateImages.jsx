import React, { useState } from 'react';
import { CategoryList } from '../../helpers/CategoriesList';

import { ImageUpload } from './ImageUpload';
import { GenerateFormDataImage } from '../../utils/CommonFunctions/GenerateData';
import { ImageApi } from '../../apis/ImageApi';




export const CreateImages = () => {

    const [image, setImage] = useState({
        name: '',
        description: '',
        category: '',
        imageFile: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setImage((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = await GenerateFormDataImage(image);
        await ImageApi(formData);
    };


    const saveImageFile = (file) => {
        setImage((prevState) => ({
            ...prevState,
            imageFile: file,
        }));
    };


    return (
        <div className="container-fluid px-3 py-3">

            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="name"
                                name="name"
                                placeholder="Jane Doe"
                                value={image.name}
                                onChange={handleChange}
                            />

                            <label htmlFor="description">Descripción</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="description"
                                name="description"
                                placeholder="Descripción"
                                value={image.description}
                                onChange={handleChange}
                            />

                            <label htmlFor="category">Categoría</label>
                            <select
                                className="form-select mb-3"
                                id="category"
                                name="category"
                                value={image.category}
                                onChange={handleChange}
                            >
                                <option defaultValue>--Seleccione una opción</option>
                                {CategoryList.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn btn-outline-primary mb-2">
                            Guardar
                        </button>

                    </form>
                </div>

                <div className='col-sm-12 col-md-6'>
                    <ImageUpload saveImageFile={saveImageFile} />
                </div>
            </div>
        </div>
    );
};