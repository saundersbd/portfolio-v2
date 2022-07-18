import React from "react";
import {
  arrowLeft,
  arrowUp,
  arrowRight,
  doc,
  external,
  globe,
  ID,
  lightBulb,
  mailOutline,
  mailSolid,
  mobile,
  puzzle,
  thumbsUp,
  users,
} from "./icons";

const Icon = ({ icon, className }) => {
  if (!icon) {
    icon = doc;
  }
  if (icon === "arrow-left") {
    icon = arrowLeft;
  }
  if (icon === "arrow-up") {
    icon = arrowUp;
  }
  if (icon === "arrow-right") {
    icon = arrowRight;
  }
  if (icon === "doc") {
    icon = doc;
  }
  if (icon === "external") {
    icon = external;
  }
  if (icon === "globe") {
    icon = globe;
  }
  if (icon === "ID") {
    icon = ID;
  }
  if (icon === "light-bulb") {
    icon = lightBulb;
  }
  if (icon === "mailOutline") {
    icon = mailOutline;
  }
  if (icon === "mailSolid") {
    icon = mailSolid;
  }
  if (icon === "mobile") {
    icon = mobile;
  }
  if (icon === "component") {
    icon = puzzle;
  }
  if (icon === "thumbs-up") {
    icon = thumbsUp;
  }
  if (icon === "users") {
    icon = users;
  }
  return <div className={className}>{icon}</div>;
};

export default Icon;
