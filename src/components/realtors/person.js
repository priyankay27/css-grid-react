import React from "react";

function Person(props) {
  return (
    <React.Fragment>
      <img
        src={props.realtorNum}
        alt={props.realtorNum}
        class="realtors__img"
      />
      <div class="realtors__details">
        <h4 class="heading-4 heading-4--light">{props.realtorName}</h4>
        <p class="realtors__sold">{props.housesSold} houses sold</p>
      </div>
    </React.Fragment>
  );
}
export default Person;
