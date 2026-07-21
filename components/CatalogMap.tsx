"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { LatLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Alojamiento } from "@/types/alojamiento";

type CatalogMapProps = {
  alojamientos: Alojamiento[];
};

const FitToMarkers = ({ alojamientos }: CatalogMapProps) => {
  const map = useMap();

  useEffect(() => {
    if (alojamientos.length === 0) {
      return;
    }

    const bounds = new LatLngBounds(alojamientos.map((item) => [item.lat, item.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [alojamientos, map]);

  return null;
};

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export const CatalogMap = ({ alojamientos }: CatalogMapProps) => {
  const defaultCenter: [number, number] = [-33.45, -70.66];

  return (
    <aside className="h-64 overflow-hidden rounded-2xl border border-[#DDDDDD] bg-[#F7F7F7] md:sticky md:top-24 md:h-[calc(100vh-8rem)]" aria-label="Mapa">
      <MapContainer center={defaultCenter} zoom={11} className="h-full w-full" scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitToMarkers alojamientos={alojamientos} />
        {alojamientos.map((item) => (
          <Marker key={item.id} position={[item.lat, item.lng]}>
            <Popup>
              <p className="font-semibold text-[#222222]">{item.title}</p>
              <p className="text-sm text-[#6A6A6A]">${item.pricePerNight} / noche</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </aside>
  );
};
