import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../../components/header/Navbar";
import { icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./Articles.css"; // import your CSS file
import Footer from "../../components/footer/Footer";

const Articles = () => {
  const [articles, setArticles] = useState([]);

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

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      const response = await fetch("/api/locations");
      const data = await response.json();
      setLocations(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="subtitle">
        <h2>Reported Garbage Locations</h2>
      </div>
      <div className="articles-map">
        <div className="map-container">
          <MapContainer zoom={8} className="map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapMarker location={location} setLocation={setLocation} />
          </MapContainer>
        </div>
      </div>
      <div className="   subtitle-2">
        <h2>Articles</h2>
      </div>
      <div className="articles">
        {articles.map((article, index) => (
    <div key={index}>
      <div className="article-content">
      <div className="article-title">
            <h3>{article.title}</h3>
          </div>
          <div className="article-body">
            <p>{article.description}</p>
          </div>
      </div>
    </div>
  ))}
        {/* <div className="article-content">
          <div className="article-title">
            <h3>{article.title}</h3>
          </div>
          <div className="article-body">
            <p>{article.description}</p>
          </div>
          <div className="article-title">
            <h3>ss</h3>
          </div>
          <div className="article-body">
            <p>ss</p>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Articles;
