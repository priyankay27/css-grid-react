import React from "react";
import Sprite from "../../img/sprite.svg";

function Feat(props) {
  return (
    <div class="feature">
      <svg className="feature__icon">
        <use xlinkHref={`${Sprite}#icon-${props.iconName}`} />
      </svg>
      <h4 class="heading-4 heading-4--dark">{props.title}</h4>
      <p class="feature__text">{props.description}</p>
    </div>
  );
}
export default Feat;
