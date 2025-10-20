import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";


export default function Map() {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[51.505, -0.09]}
                icon={L.icon({
                    iconUrl: "leaflet/marker-icon.png",
                    shadowUrl: "leaflet/marker-shadow.png",
                })}
            >
                <Popup>Hello from London!</Popup>
            </Marker>
        </MapContainer>
    );
}
