import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = props.className ? props.className + " card" : "card";

  const l = Array(5);
  for (let i = 0; i < 5; i++) {
    console.log("apple");
  }
  console.log(l.length);
  console.log(l);

  return (
    <div className={classes}>
      <div className="row-content">
        <div className="slider">
          {l.map(
            () => console.log("apple")
            // <div className="smallCard">
            //   <div className="animation-class"></div>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
