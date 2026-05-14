import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6850, 90.3563];
  const serviceCenter = useLoaderData();
  console.log(serviceCenter)
  return (
    <div className="bg-[#ffff] my-20 mx-[109px]">
      <h3 className="text-5xl font-extrabold text-[#03373D]">
        We are available in 64 districts
      </h3>
      <div></div>
      <div className="border-2 w-full h-[800px]">
        <MapContainer className="h-[800px] w-full" center={position} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {
            serviceCenter.map((center,index) => <Marker key={index}
              position={[center.latitude,center.longitude]}>
            <Popup>
                <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
            </Popup>
          </Marker>)
          }

        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
