import axios from 'axios';



export const ImageApi = async (formData) => {
    try {
        return await axios.post('https://localhost:7016/api/Images/CreateImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    } catch (error) {
        console.error('Error uploading image', error)
    }
};