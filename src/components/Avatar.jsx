import React from "react";
import image from "../assets/img/avatar.jpg";

function Avatar() {
  return (
    <article className="block-avatar">
      <article className="first-section-avatar">
        <div>
          <img src={image} alt="" />
        </div>
      </article>
      <article></article>
    </article>
  );
}

export default Avatar;
