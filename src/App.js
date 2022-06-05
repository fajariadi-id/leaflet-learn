import React from "react";
import mapData from "./data/indonesia-map.json";
import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON } from "react-leaflet";
import "./App.css";

const App = () => {
  const mapStyle = {
    fillColor: "lightgreen", // warna dalem
    fillOpacity: 0.7, // opacity warna dalem
    color: "green", // warna border
    weight: 2, // ketebalan border
  };

  const onEachProvince = (province, layer) => {
    const provinceName = province.properties.Propinsi;
    layer.bindPopup(provinceName);
    layer.on({
      click: (e) => {
        // console.log(provinceName, e);
        // DO SOMETHING HERE ON PROVINCE CLICK
      },
    });
  };

  return (
    <div>
      <h1>MAP INDONESIA</h1>

      <MapContainer style={{ height: "80vh" }} zoom={6} center={[-5, 110]}>
        <GeoJSON
          style={mapStyle}
          data={mapData.features}
          onEachFeature={onEachProvince}
        />
      </MapContainer>
    </div>
  );
};

export default App;
