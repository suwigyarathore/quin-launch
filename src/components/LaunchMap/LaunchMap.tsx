import React from 'react'
import { Pad } from '../../types/launch'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'


interface LaunchMapProps{
    launchLocations?: Pad[];
    zoom?: number
}

const center = {
    lat: 52.36,
    lng: 4.90,
  };

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

export const LaunchMap = ({launchLocations, zoom = 2}: LaunchMapProps) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "apikeyremoved"
  })

  
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map: any) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map
      : any) {
      setMap(null)
    }, [])
  
    return isLoaded && zoom ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
         {launchLocations?.map(location => <Marker key={location.id} position={{lat: +location.latitude, lng: +location.longitude}}/>)}
        </GoogleMap>
    ) : <></>
}
