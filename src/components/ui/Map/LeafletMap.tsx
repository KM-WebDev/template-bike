import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { useEffect } from "react";

export default function Map() {
    // const [isCtrlClicked, setCtrlClicked] = useState<boolean>(false);
    // useEffect(() => {
    //     const downHandler = (e: KeyboardEvent) => {
    //         if (e.ctrlKey) {
    //             // document.addEventListener("wheel", (e) => {
    //                 // e.preventDefault();
    //             // });
    //             e.preventDefault();
    //             setCtrlClicked(true);
    //         }
    //     };
    //     const upHandler = (e: KeyboardEvent) => {
            
    //         if (e.ctrlKey) {
    //             setCtrlClicked(false);
    //         }
    //     };

    //     document.addEventListener("keydown", downHandler);
    //     document.addEventListener("keyup", upHandler);
        
    //     return () => {
    //         document.removeEventListener("keydown", downHandler);

    //         document.removeEventListener("keyup", upHandler);
    //     };
    // }, []);

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
            // scrollWheelZoom={isCtrlClicked}
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
            <MapController />
        </MapContainer>
    );
}


const MapController = () => {
  const map = useMap();
  
  useEffect(() => {
    map.addHandler("gestureHandling", GestureHandling);
    // @ts-expect-error typescript does not see additional handler here
    map.gestureHandling.enable();
  }, [map]);

  return null;
}