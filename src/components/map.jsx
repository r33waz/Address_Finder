import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent({ipDatas}) {
  return (
    <MapContainer center={[ipDatas?.latitude, ipDatas?.longitude]} zoom={13}>
      <TileLayer
        attribution="Riwaz Thapa"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipDatas?.latitude, ipDatas?.longitude]}>
        <Popup>
          <span>{(ipDatas?.latitude+" "+ipDatas?.longitude)}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
