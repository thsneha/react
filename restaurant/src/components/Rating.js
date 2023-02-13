import React from "react";
import RestaurantDetails from "./RestaurantDetails";

function Rating({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div>
       <span> <h6>{item.name}</h6>{item.date}</span>   
          <p>{item.comments}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Rating;
