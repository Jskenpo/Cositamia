import React from 'react'
import './location.css'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 14.60406,
      lng: -90.48919
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '100%' }} id = 'MapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
            lat={14.60406}
            lng={-90.48919}
            text="My Marker"
        />
        
                
      </GoogleMapReact>
    </div>
  );
}
