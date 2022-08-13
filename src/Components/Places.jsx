import React from "react";

export default function Places({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="place">
      <img src={imageUrl} alt="place image" className="place-img" ></img>
      <div className="content">
        <section className="location-details">
            <img src="./assets/pin.png" alt="pin" className="pin-img"></img>
            <p className="caps">{location}</p>
            <a href={googleMapsUrl} target="_blank" className= "link" >View on Google Maps</a>
        </section>
        <h1>{title}</h1>
        <h3>{startDate}-{endDate}</h3>
        <article>
            <p>{description}</p>
        </article>
      </div>
    </div>
  );
}
