import React from "react";
import { mediaData } from "../../data";
import "./Media.css";

export default function Media({ WhiteMedia }) {
  return (
    <div className="SocialMediaContainer d-flex">
      {mediaData.map((media, index) => (
        <div key={index}>
          <a href={media.link} target="_blank" rel="noopener noreferrer">
            <img
              className={`SocialMediaIcon ${WhiteMedia ? "WhiteMedia" : ""}`}
              src={media.url}
              alt={media.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
