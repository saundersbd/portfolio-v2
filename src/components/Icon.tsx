import React from "react";
import {
  about,
  arrowHookLeft,
  arrowLeft,
  arrowUp,
  arrowRight,
  beaker,
  chat,
  doc,
  external,
  globe,
  ID,
  lightBulb,
  mailOutline,
  mailSolid,
  mobile,
  paper,
  puzzle,
  rocket,
  star,
  thumbsUp,
  users,
} from "./icons";

interface IconConfig {
  icon?: React.ReactNode;
  className?: string;
}

const Icon = ({ icon, className }: IconConfig) => {
  if (!icon) {
    icon = doc;
  }
  if (icon === "about") {
    icon = about;
  }
  if (icon === "arrow-hook-left") {
    icon = arrowHookLeft;
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
  if (icon === "beaker") {
    icon = beaker;
  }
  if (icon === "chat") {
    icon = chat;
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
  if (icon === "paper") {
    icon = paper;
  }
  if (icon === "rocket") {
    icon = rocket;
  }
  if (icon === "star") {
    icon = star;
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
