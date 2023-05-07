import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from "../../components/header/Navbar";


const GarbageReportPage = () => {
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleMarkerClick = (e) => {
    setPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
  };

  const handleImageUpload = (e) => {
    setImages([...images, e.target.files[0]]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('latitude', position.lat);
    formData.append('longitude', position.lng);

    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    // Use formData to submit report
  };

  return (
    <div>
      <Navbar/>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '50vh', width: '100%' }} onClick={handleMarkerClick}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position.lat && position.lng && <Marker position={position}><Popup>Your location</Popup></Marker>}
      </MapContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleTitleChange} />
        <input type="file" multiple onChange={handleImageUpload} />
        <textarea value={description} onChange={handleDescriptionChange} />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default GarbageReportPage;
