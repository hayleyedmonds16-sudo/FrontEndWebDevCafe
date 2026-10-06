import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { cafeData } from '../data/locations';
import { useState } from 'react';


const Map = () => {
    const position = [55.86639, -4.24919];
    const [activeCafe, setActiveCafe ] = useState(position);
    const markerClicked = (position) => {
        setActiveCafe(position);
    }
    const icon = new Icon ({
        iconUrl: "/markerIcon.svg",
        iconSize: [40, 40],
    });

    return (
        <>
        <MapContainer 
            center={position} 
            zoom={12} 
            scrollWheelZoom={true} 
            className="map" 
            style={{ height: '400px', width: '100%' }
            
            }>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker
                position={position}>
                <Popup>GCU</Popup>
            </Marker>  

            {cafeData.map((cafe) => (
            <Marker
                    key={cafe.properties.cafe_id}
                    position={cafe.geometry.coordinates} 
                    icon={icon}
                    eventHandlers={{ click: () => markerClicked(cafe.geometry.coordinates) }}
                >
                    <Popup>
                        <div className="popup">
                            {cafe.properties.name}
                        </div>
                    </Popup>
            </Marker>
            
            ))}        
        </MapContainer>


         <div className="info">
                The cafe you have currently selected is located at
                latitude: {activeCafe[0]} longitude: {activeCafe[1]}.
            </div>
        </>
    );
};

export default Map;
