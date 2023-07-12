"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const PreMap = () => {
  return (
    <MapContainer className='w-full h-60 z-10 md:h-96' center={[43.8234729,-79.287548]} zoom={16} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[43.8234729,-79.287548]}>
            <Popup>
               16 Hambleton Court
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default PreMap