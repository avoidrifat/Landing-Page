import React, { useState } from "react";
import { StarButton } from "./HeroStyles";

const Star = () => {
  const [rating, setRating] = useState(0);
  const handleClick = (value) => {
    setRating(value);
  };
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const value = i + 1;
        return (
          <StarButton
            key={value}
            onClick={() => handleClick(value)}
            className={value <= rating ? 'active' : ''}
          >
            &#9733;
          </StarButton>
        );
      })}
    </div>
  );
};

export default Star;
