import React from "react";
import realtor_1 from "../../img/realtor-1.jpeg";
import realtor_2 from "../../img/realtor-2.jpeg";
import realtor_3 from "../../img/realtor-3.jpeg";
import Person from "./person";

function Realtors() {
  return (
    <div class="realtors">
      <h3 class="heading-3">Top 3 Realtors</h3>
      <div class="realtors__list">
        <Person
          realtorNum={realtor_1}
          realtorName="Erik Feinman"
          housesSold="245"
        />
        <Person
          realtorNum={realtor_2}
          realtorName="Kim Brown"
          housesSold="212"
        />
        <Person
          realtorNum={realtor_3}
          realtorName="Toby Ramsey"
          housesSold="198"
        />
      </div>
    </div>
  );
}
export default Realtors;
