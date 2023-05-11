import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CaptainNavbar from "../../components/header/CaptainNavbar";
import { icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./GTFcaptain.css"; // import your CSS file
import Footer from "../../components/footer/Footer";

const GTFcaptain = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
      };

      
    const [locations, setLocations] = useState([
        { lat: 7.178, lng: 79.869 },
        { lat: 7.181, lng: 79.864 },
        { lat: 7.185, lng: 79.868 },
      ]);
    
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
            console.log(
              `Latitude: ${event.latlng.lat}, Longitude: ${event.latlng.lng}`
            );
          },
        });
        useEffect(() => {
            // Fetch data from backend
            const fetchData = async () => {
              const response = await fetch("/api/locations");
              const data = await response.json();
              setLocations(data);
            };
        
            fetchData();
          }, []);
        const customIcon = icon({
          iconUrl: markerIcon,
          iconRetinaUrl: markerIconRetina,
          shadowUrl: markerShadow,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
        });
        useEffect(() => {
            // Fetch data from backend
            const fetchData = async () => {
              const response = await fetch("/api/locations");
              const data = await response.json();
              setLocations(data);
            };
        
            fetchData();
          }, []);
        
        
    return (
        <MapContainer center={[7.182075, 79.862491]} zoom={8} className="map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup>{`Location ${index + 1}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  };
  


  return (
    <div>
      <CaptainNavbar />
      <div className="subtitle">
        <h2>Reported Garbage Locations</h2>
      </div>
      <div className="garbage-report-page">
        <div className="garbage-report-form">
          <div className="map-container">
            <label>Reported Garbage Locations</label>
            <MapContainer zoom={8} className="map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapMarker location={location} setLocation={setLocation} />
          </MapContainer>
          </div>

          <div className="Map-list">
            <h3>Garbage Locations List</h3>
            <ul>
              {locations.map((location) => (
                <li
                  key={location.id}
                  onClick={() => handleMarkerClick(location)}
                  className={selectedLocation && selectedLocation.id === location.id ? "selected" : ""}
                >
                  {`Location ${location.id}`}
                </li>
              ))}
            </ul>
            {selectedLocation && (
              <div className="location-details">
                <h4>{`Location ${selectedLocation.id}`}</h4>
                <p>{`Latitude: ${selectedLocation.lat}, Longitude: ${selectedLocation.lng}`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GTFcaptain;
