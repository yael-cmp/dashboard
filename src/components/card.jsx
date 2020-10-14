import React from "react";
import iconF from "../assets/images/icon-facebook.svg";
import iconI from "../assets/images/icon-instagram.svg";
import iconT from "../assets/images/icon-twitter.svg";
import iconY from "../assets/images/icon-youtube.svg";
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg";

const Card = ({ iconApp, number, user, subs, url }) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <div className="card">
        <div className={iconApp ? `bord ${iconApp}` : "bord"}></div>
        <div className="card--p">
          <img
            className="card--icon"
            src={
              iconApp === "facebook"
                ? iconF
                : iconApp === "instagram"
                ? iconI
                : iconApp === "twitter"
                ? iconT
                : iconApp === "youtube"
                ? iconY
                : null
            }
            alt=""
          />
          <h5 className="card--p-user color_d">{user}</h5>
        </div>
        <h1 className="card--non">
          {subs > 1000000
            ? `${String((subs / 1000000).toFixed())}M`
            : subs > 3000
            ? `${String((subs / 1000).toFixed())}K`
            : subs}
        </h1>
        <h5 className="card--f color_d">followers</h5>
        <h5 className={number < 0 ? "card-not-ok" : "card-ok"}>
          <img src={number < 0 ? iconDown : iconUp} alt="" />{" "}
          {String(number).split("-")} Today
        </h5>
      </div>
    </a>
  );
};
export const CardOverview = ({ iconApp, number, subs, url }) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <div className="overv">
        <div className="overv--p">
          <h5 className="color_d">likes</h5>
          <img
            className="card--icon"
            src={
              iconApp === "facebook"
                ? iconF
                : iconApp === "instagram"
                ? iconI
                : iconApp === "twitter"
                ? iconT
                : iconApp === "youtube"
                ? iconY
                : null
            }
            alt=""
          />
        </div>
        <div className="overv--p">
          <h1>
            {subs > 1000000
              ? `${String((subs / 1000000).toFixed())}M`
              : subs > 3000
              ? `${String((subs / 1000).toFixed())}K`
              : subs}
          </h1>
          <h5 className={number < 0 ? "card-not-ok" : "card-ok"}>
            <img src={number < 0 ? iconDown : iconUp} alt="" />{" "}
            {String(number).split("-")}%
          </h5>
        </div>
      </div>
    </a>
  );
};
export default Card;
