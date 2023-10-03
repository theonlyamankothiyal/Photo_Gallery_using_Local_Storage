// UploadImg.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./uploadImgStyle.css";
import Navbar from '../../components/Navbar/Navbar';

const UploadImg = ({ onUploadSuccess }) => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async () => {
    const encodedImages = await Promise.all(images.map(async (image) => ({
      name: name,
      description: description,
      price: price,
      data: await convertToBase64(image),
    })));

    // Get existing data or initialize as an empty array if it doesn't exist
    const oldData = JSON.parse(localStorage.getItem("images")) || [];

    const updatedData = [...oldData, ...encodedImages]; // Merge old data with new data

    localStorage.setItem('images', JSON.stringify(updatedData));

    setImages([]);
    setName('');
    setDescription('');
    setPrice('');

    onUploadSuccess(); // Call the callback function

    // Pass the 'name' value as a query parameter to the '/display' route
    navigate('/display', { state: { name } });
  };

  return (
    <>
      <div className='bg'>
        <Navbar />
        <div className='upload'>
          <h2>Upload Images</h2>
          <input type="file" multiple onChange={handleImageChange} />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default UploadImg;
