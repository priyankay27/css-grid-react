import React from "react";
import Feat from "./feat";

function Features() {
  return (
    <section class="features">
      <Feat
        iconName="global"
        title="World's best luxury homes"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus."
      />
      <Feat
        iconName="trophy"
        title="Only the best properties"
        description="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
        rerum sed a eligendi aut quia."
      />
      <Feat
        iconName="map-pin"
        title="All homes in in top locations"
        description="Tenetur distinctio necessitatibus pariatur voluptatibus quidem
        consequatur harum."
      />
      <Feat
        iconName="key"
        title="New home in one week"
        description="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit."
      />
      <Feat
        iconName="presentation"
        title="Top 1% realtors"
        description="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
        necessitatibus pariatur voluptatibus."
      />
      <Feat
        iconName="lock"
        title="Secure payments on nexter"
        description="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
        quae."
      />
    </section>
  );
}
export default Features;
