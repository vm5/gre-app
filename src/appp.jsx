import React from "react";
import Card from "./card.jsx";
import advisors from "./images.js";

function Createcard(advisors){
  return <Card name = {advisors.name} 
  id = {advisors.id}
  img = {advisors.imgURL}
  text = {advisors.text}
  />;
  }

function Appp() {
  return (
    <div>
      <h1 className="heading">SMALL NOTES FROM GRE ADVISORS</h1>
      {advisors.map(Createcard)}
      {/*<Card
  name={advisors[0].name}
  img={advisors[0].imgURL}
  text={advisors[0].text}
/>
<Card
  name={advisors[1].name}
  img={advisors[1].imgURL}
  text={advisors[1].text}
/> */}

     
    </div>
  );
}

export default Appp;
