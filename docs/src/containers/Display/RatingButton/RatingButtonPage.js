import { useState } from "react";
import {
  RatingButton,
} from "react-play-ui";

export const RatingButtonPage = () => {

  const [value, setValue] = useState(3);
  const handleValueChange = (val) => {
    if (value === val) {
      setValue(0);
    } else {
      setValue(val)
    }
  }

  return (
    <div>
      <h2>
        Rating Button
      </h2>
      <RatingButton
        onClick={handleValueChange}
        icon="academicCap"
        color="warning"
        label={`My value is ${value}`}
        value={value}
      />
    </div>
  )
};
