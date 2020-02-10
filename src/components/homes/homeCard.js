import React from "react";
import Sprite from "../../img/sprite.svg";
import Button from "../shared/button";

function Homes(props) {
  return (
    <div class="home">
      <img
        src={props.homeNum}
        alt={`House ${props.homeNum}`}
        class="home__img"
      />
      <svg class="home__like">
        <use xlinkHref={`${Sprite}#icon-heart-full`} />
      </svg>
      <h5 class="home__name">{props.homeDesc}</h5>
      <div class="home__location">
        <svg>
          <use xlinkHref={`${Sprite}#icon-map-pin`} />
        </svg>
        <p>{props.city}</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlinkHref={`${Sprite}#icon-profile-male`} />
        </svg>
        <p>{props.rooms}</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlinkHref={`${Sprite}#icon-expand`} />
        </svg>
        <p>
          {props.area} m<sup>2</sup>
        </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlinkHref={`${Sprite}#icon-key`} />
        </svg>
        <p>Rs.{props.cost}</p>
      </div>
      <Button btnClass="btn home__btn" btnText="Contact realtor" />
    </div>
  );
}
export default Homes;
