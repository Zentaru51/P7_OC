import React from "react";
import Rate from "../../Assets/Rate.svg";
import Rate0 from "../../Assets/Rate0.svg";

function Rating({ rating }) {
  let fullRating = [];
  let emptyRating = [];
  for (let index = 0; index < rating; index++) {
    fullRating.push(index);
  }
  for (let index = 0; index < 5 - rating; index++) {
    emptyRating.push(index);
  }
  console.log(fullRating);
  console.log(emptyRating);
  return (
    <div className="Stars">
      {fullRating.map((star) => <img src={Rate} alt="Full-Stars" key={star}/>)}
      {emptyRating.map((star) => <img src={Rate0} alt="No-Star" key={star}/>)}
    </div>
  );
}

export default Rating;
