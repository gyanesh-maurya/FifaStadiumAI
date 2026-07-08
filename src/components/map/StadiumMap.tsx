"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export default function StadiumMap() {
  // MetLife Stadium coordinates (FIFA 2026 Final venue)
  const stadiumCenter: [number, number] = [40.8128, -74.0745];

  useEffect(() => {
    // Force a resize event to ensure map renders correctly
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-inner relative z-0">
      <MapContainer 
        center={stadiumCenter} 
        zoom={17} 
        scrollWheelZoom={true} 
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Stadium Boundary Highlight */}
        <Circle center={stadiumCenter} pathOptions={{ color: 'blue', fillColor: 'blue' }} radius={200} />

        {/* POI Markers */}
        <Marker position={[40.8135, -74.0740]} icon={icon}>
          <Popup>
            <div className="font-semibold text-sm">Gate 4</div>
            <div className="text-xs text-muted-foreground">Entry for Block 112</div>
          </Popup>
        </Marker>

        <Marker position={[40.8120, -74.0750]} icon={icon}>
          <Popup>
            <div className="font-semibold text-sm">Burger & Fries Stall</div>
            <div className="text-xs text-green-600 font-bold">Queue: 5 min</div>
          </Popup>
        </Marker>
        
        <Marker position={[40.8128, -74.0745]} icon={icon}>
          <Popup>
            <div className="font-semibold text-sm">Center Pitch</div>
            <div className="text-xs text-muted-foreground">FIFA World Cup 2026</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
