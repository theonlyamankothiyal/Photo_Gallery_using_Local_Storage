import React, { useEffect, useState } from 'react';
import "./displayImgStyle.css"
import Navbar from '../../components/Navbar/Navbar';
const DisplayImg = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Retrieve and parse images from local storage
    const storedImages = localStorage.getItem('images');
    console.log(storedImages); 
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);


  return (
    <>
    <div className='bg'>
    <Navbar/>
    <div className='display'>
      <h1>Image Display</h1>
      <br/>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.data} alt={image.name} />
            <p>Name: {image.name}</p>
            <p>Description: {image.description}</p>
            <p>Price: $ {image.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default DisplayImg;
