import GoogleMapReact from "google-map-react"

import { Icon } from "@iconify/react"

export default function Map() {
    const location = {
        address: 'Spicewood Country School',
        lat: 30.391520,
        lng: -97.774353
    }

    const LocationPin = ({ text }) => (
        <div className="pin">
            <Icon icon='map:postal-code' />
            <p>{text}</p>
        </div>
    )

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                center={location}
                zoom={14.5}>
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}
