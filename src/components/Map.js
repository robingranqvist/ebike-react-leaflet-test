import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import { ref, onValue} from "firebase/database"
import db from '../utils/firebase'

const Map = () => {
	const [bikes, setBikes] = useState([])

	useEffect(() => {
		const bikesRef = ref(db, 'bikes')
		onValue(bikesRef, (snapshot) => {
			let items = []
			snapshot.forEach((s) => {
				items.push(s.val())
			})
			setBikes(items)
		});
	}, [])

	return (
		<div>
			<MapContainer center={[60.192123, 24.945831]} zoom={9} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{ bikes.map(bike => ( <Marker position={[bike.lat, bike.lan]} key={bike.id}></Marker> )) }
			</MapContainer>
		</div>
	)
}

export default Map
