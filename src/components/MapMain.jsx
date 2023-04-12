// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Marker as LeafletMarker, icon } from 'leaflet'

import 'leaflet/dist/leaflet.css'

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

LeafletMarker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

const MapMain = () => {
  const ubicacion = {
    lat: -1.0553448,
    lng: -79.4636704
  }
  return (
    <MapContainer
      className='relative z-0 laptop:h-full h-[calc(100%-56px)]'
      // style={{ height: 'calc(100% - 56px)' }}
      center={ubicacion}
      zoom={8}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={ubicacion}>
        <Popup>
          Soy Erika <br /> Estoy en el desquite
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapMain
