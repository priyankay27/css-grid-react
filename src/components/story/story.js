import React from "react";
import story_1 from "../../img/story-1.jpeg";
import story_2 from "../../img/story-2.jpeg";
import Button from "../shared/button";

function Story() {
  return (
    <React.Fragment>
      <div class="story__pictures">
        <img src={story_1} alt="Couple with new house" class="story__img--1" />
        <img src={story_2} alt="New house" class="story__img--2" />
      </div>

      <div class="story__content">
        <h3 class="heading-3 mb-sm">Happy Customers</h3>
        <h2 class="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p class="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <Button btnClass="btn" btnText="Find your own home"></Button>/>
      </div>
    </React.Fragment>
  );
}
export default Story;
