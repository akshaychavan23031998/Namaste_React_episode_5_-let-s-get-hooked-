import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockdata";

const Body = () => {

  const [listOfRes, setListOfRes]=useState(resList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            //logic of filter:-
            const filteredlist = resList.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            // console.log("Button Clicked");
            console.log(filteredlist);
            setListOfRes(filteredlist);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
            listOfRes.map((restaurant) => (
                  <RestaurantCard key={restaurant.card.card.info.id}  resData={restaurant} />
              ))
          }
        </div>
      </div>
    );
  };

  export default Body;