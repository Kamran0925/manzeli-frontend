import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GeoProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const GeoLocation: React.FC<GeoProps> = ({ center, zoom }) => {
  const mapStyle = {
    height: "287px",
    width: "100%",
    flexShrink: 0,
    borderRadius: "7.993px",
    background: `linear-gradient(0deg, var(--Overlays-Default, rgba(0, 0, 0, 0.20)) 0%, var(--Overlays-Default, rgba(0, 0, 0, 0.20)) 100%), lightgray 50% / cover no-repeat`,
    boxShadow: "0px 8px 28px -6px rgba(0, 0, 0, 0.15)",
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={zoom}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GeoLocation;
