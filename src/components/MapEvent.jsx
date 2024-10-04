import PropTypes from "prop-types";
import { useMapEvents } from "react-leaflet";

function MapEvents({ setMousePoint }) {
    const map = useMapEvents({
        click(e) {
          setMousePoint(e.latlng)
        },
        locationfound(e) {
            map.flyTo(e.latlng, map.getZoom())
        },
      })
    return null; 
}

export default MapEvents;

MapEvents.propTypes = {
    setMousePoint: PropTypes.func.isRequired
}