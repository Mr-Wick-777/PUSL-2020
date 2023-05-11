import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from "../../components/header/Navbar";
import { icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './Incidents.css'; // import your CSS file
import Footer from "../../components/footer/Footer"

const GarbageReportPage = () => {
  const [position] = useState({ lat: null, lng: null });
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

  const handleImageRemove = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
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
    <div className="subtitle">
                <h2>Report New Garbage incident</h2>
               
            </div>
    <div className='garbage-report-page'>
   
    
    <div className="garbage-report-form">
 
      <div className="map-container">
          
<label>Select Garbage Location</label>
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={8}
          className="map"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapMarker location={location} setLocation={setLocation} />
        </MapContainer>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
        Type of Garbage:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
        Impact on Environment:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label htmlFor="images" className="custom-file-upload">
            Upload images
             <input type="file" id="images" name="images" accept="image/*" onChange={handleImageUpload} />
          </label>
          <div className='image-container'>

          <div className="selected-images">
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <img src={URL.createObjectURL(image)} alt='f' /> 
              {/* alt={`Image ${index + 1}`} */}
              <button type="button" onClick={() => handleImageRemove(index)}>Remove</button>
            </div>
          ))}
          
          </div>
          
          </div>
          {console.log(images)}
<br />
<button type="submit">Submit Report</button>
</form>
</div></div>
<Footer/>
</div>
);
};

export default GarbageReportPage;