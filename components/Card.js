import React from "react"

export default function Card(props){
    return(
        <div className="card-container">
            <div className="card">
                <div className="left">
                    <img className="card-img" src={`../img/${props.imageUrl}`} loading="lazy" />
                </div>
                <div className="right">
                    <div className="location-details">
                        <img className="map-marker" src="../img/MapMarker.svg" loading="lazy" />
                        <h3 className="state">{props.location}</h3>
                        <a className="google-map-link" href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a>
                    </div>
                    <h1 class="title">{props.title}</h1>
                    <p className="date">{props.date}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        <hr />
        </div>
    )
}
