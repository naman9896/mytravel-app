import React from "react";

export default function Location(props) {
  return (
    <div className="card">
      <img src={`./images/${props.img}`} />
      <div className="info--container">
        <span className="location--container">
          <i class="fas fa-map-marker-alt location--icon"></i>
          <p className="country">{props.location.toUpperCase()}</p>
          <a href="https://google.com">View on Google Maps</a>
        </span>
        <h1>{props.title}</h1>
        <p className="date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  );
}
