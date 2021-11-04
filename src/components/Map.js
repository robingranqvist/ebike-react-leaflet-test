import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from 'react'

const Map = () => {
	const [lat, setLat] = useState(60.192059)
	const [lan, setLan] = useState(24.945831)

	setInterval(() => {
		setLat(prevLat => prevLat + 0.0000001);
		setLan(prevLan => prevLan + 0.0000001);
	}, 500)

	return (
		<div>
			<MapContainer center={[lat, lan]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lan]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default Map
