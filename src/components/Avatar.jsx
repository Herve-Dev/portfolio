import React from "react";
import image from "../assets/img/avatar.png";

function Avatar() {
  return (
    <article className="block-avatar">
      <article className="first-section-avatar">
        <div>
          <img src={image} alt="photo avatar" />
        </div>
      </article>
      <article className="second-section-avatar">
        <h2>Herve Taillefond</h2>
      </article>
    </article>
  );
}

export default Avatar;
