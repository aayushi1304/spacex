import React from "react";
import { Card } from "react-bootstrap";
import "./RocketLaunch.css";

function RocketLaunchDetails({ details }) {
  const {
    flight__num,
    mission__name,
    mission__id,
    launch__year,
    launch__success,
    links,
    rocket,
  } = details;
  const imgSrc = links.mission_patch_small;
  const land_success = rocket.first_stage.cores[0].land_success;

  return (
    <Card className="Rocket-details-card">
      <div key={flight__num}>
        <div>
          <img
            src={imgSrc}
            alt="mission patch img not available on api"
            className="Rocket-mission-image"
          />
        </div>
        <div className="Rocket-mission-name-flight-number">
          {mission__name} #{flight__num}
        </div>
        <div className="Rocket-detail-label">
          Mission Ids:{" "}
          <ul>
            {" "}
            <li className="Rocket-detail-value">{mission__id}</li>
          </ul>
        </div>
        <div className="Rocket-detail-label">
          Launch Year:{" "}
          <span className="Rocket-detail-value">{launch__year}</span>
        </div>
        <div className="Rocket-detail-label">
          Successful Launch:{" "}
          <span className="Rocket-detail-value">
            {launch__success ? "true" : "false"}
          </span>
        </div>
        <div className="Rocket-detail-label">
          Successful Landing:{" "}
          <span className="Rocket-detail-value">
            {land_success ? "true" : "false"}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default RocketLaunchDetails;
