import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from "../../components/header/Navbar";
import { icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './Incidents.css'; // import your CSS file

const GarbageReportPage = () => {
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [location, setLocation] = useState({
    lat: 7.182075,
    lng: 79.862491,
  });

  const MapMarker = ({ location, setLocation }) => {
    useMapEvents({
      click: (event) => {
        setLocation({
          lat: event.latlng.lat,
          lng: event.latlng.lng,
        });
        setPosition({
          lat: event.latlng.lat,
          lng: event.latlng.lng,
        });
        console.log(`Latitude: ${event.latlng.lat}, Longitude: ${event.latlng.lng}`);
      },
    });

    const customIcon = icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIconRetina,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });

    return (
      <Marker position={[location.lat, location.lng]} icon={customIcon}>
        <Popup>Garbage location</Popup>
      </Marker>
    );
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

    console.log('Form data:', formData);
  };

  return (
    <div>
    <Navbar />
    <div className="garbage-report-page">
      

      <div className="map-container">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={12}
          className="map"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapMarker location={location} setLocation={setLocation} />
        </MapContainer>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label><input type="file" onChange={handleImageUpload} />
</label>
<br />
<button type="submit">Submit Report</button>
</form>
</div></div>
);
};

export default GarbageReportPage;