import React, { useState } from "react";
import { Chips, Chip, ActionButton } from "react-play-ui";

export const ChipPage = (props) => {
  const chips = [
    {
      label: "Default",
      color: "default",
      onClick: () => {},
    },
    {
      label: "No Click",
      color: "default",
    },
    {
      label: "Primary Link",
      color: "primary",
      onClick: () => {},
      href: "/data/chip",
    },
    {
      label: "Success Link",
      color: "success",
      icon: "externalLink",
      href: "/data/chip",
      onClick: () => {},
    },
    {
      label: "Accent",
      color: "accent",
      icon: "x",
      iconOnClick: () => alert("You clicked Icon!"),
      onClick: () => alert("You clicked chip!"),
    },
    {
      label: "Warning",
      color: "warning",
      icon: "viewGridAdd",
      href: "/data/chip",
      iconOnClick: () => alert("You clicked Icon!"),
      iconSide: "left",
    },
    {
      label: "Danger",
      color: "danger",
      onClick: () => alert("Clicked chip!"),
      icon: "user",
    },
  ];

  const [dynamicChips, setDynamicChips] = useState([]);
  const colors = [
    "primary",
    "success",
    "accent",
    "warning",
    "danger",
    "default",
  ];

  const removeChip = (index) => {
    const chipList = [...dynamicChips];
    chipList.splice(index, 1);
    setDynamicChips(chipList);
  }

  const addChip = () => {
    let num = Math.floor(Math.random() * 7)
    let label = colors[num];
    let chipList = [...dynamicChips];
    setDynamicChips([
      ...chipList,
      {
        label: label,
        color: label,
        icon: "x",
        iconSide: "right"
      }
    ]);
  };

  return (
    <div>
      <h2>Chip</h2>
      <Chips chips={chips} />
      <h3>Dynamic Chip Group Example</h3>
      <ActionButton
        onClick={() => addChip()}
        fill={false}
        label="Add chip"
        icon="plus"
      />
      <Chips>
        {dynamicChips.map((chip, idx) => {
          return (
            <Chip
              key={idx}
              iconOnClick={() => removeChip(idx)}
              {...chip}
            />
          )
        })}
      </Chips>
    </div>
  );
};
