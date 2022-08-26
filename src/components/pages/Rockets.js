import React from "react";
import { useSelector } from "react-redux";
import DisplayRockets from "../rockets/DisplayRockets";
import "bootstrap/dist/css/bootstrap.css";

const Rockets = () => {
  const rocketList = useSelector((state) => state.rocketReducer);

  return (
    <>
      <ul className="my-rocket-list">
        {rocketList.map((item) => (
          <DisplayRockets
            rocketDescription={item.rocketDescription}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.flickr_images}
            reserved={item.reservation}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
