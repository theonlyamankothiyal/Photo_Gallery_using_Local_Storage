// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DisplayImg, Login, Profile, Register, UploadImg } from './Pages';

function App() {
  // Define a function to handle successful upload
  const handleUploadSuccess = () => {
    // Handle successful upload here
    console.log('Upload successful!');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/upload"
          element={<UploadImg onUploadSuccess={handleUploadSuccess} />}
        />
        <Route path="/display" element={<DisplayImg />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
