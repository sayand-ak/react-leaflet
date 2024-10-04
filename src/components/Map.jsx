import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapEvents from "./MapEvent";
import { useCurLocation } from "../hook/useCurLocation";
import { getLocationInfo } from "../api/getLocationInfo";
import { useDispatch } from "react-redux";
import { addLocationData } from "../features/locationInfoSlice";

function Map() {
    const [mousePoint, setMousePoint] = useState(null); 
    const [placeInfo, setPlaceInfo] = useState("");
    const { location, error } = useCurLocation();
    const [center, setCenter] = useState([51.505, -0.09]); 
    const dispatch = useDispatch();

    useEffect(() => {
        async function setLocationData() {
            if (location && error === "") {
                setCenter([location.latitude, location.longitude]);
    
                const data = await getLocationInfo(location.latitude, location.longitude);
                if (data.display_name) {
                    dispatch(addLocationData(data.display_name));
                }
            }
        }
        setLocationData();
    }, [location, error, dispatch]);

    useEffect(() => {
        async function fetchLocationInfo() {
            if (mousePoint) {
                setCenter([mousePoint.lat, mousePoint.lng]); 
                
                const data = await getLocationInfo(mousePoint.lat, mousePoint.lng);
                if (data.display_name) {
                    setPlaceInfo(data.display_name);
                    dispatch(addLocationData(data.display_name)); 
                }
            }
        }
        fetchLocationInfo();
    }, [mousePoint, dispatch]);

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ zIndex: 0, height: "100vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Marker at the center, which will update to the clicked location */}
            <Marker position={center}>
                <Popup>
                    {placeInfo ? placeInfo : "Loading..."} {/* Show place info in popup */}
                </Popup>
            </Marker>

            {/* MapEvents component to capture clicks and set mousePoint */}
            <MapEvents setMousePoint={setMousePoint} />
        </MapContainer>
    );
}

export default Map;
