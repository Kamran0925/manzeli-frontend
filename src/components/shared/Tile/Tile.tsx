import React from "react";
import { Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import classNames from "classnames";

import { RightArrowIcon } from "../../../assets/icons/ui/RightArrow";
import { Briefcase } from "../../../assets/icons/ui/Briefcase";
import { User } from "../../../assets/icons/ui/User";
import { UserFill } from "../../../assets/icons/ui/UserFill";
import { BriefcaseFill } from "../../../assets/icons/ui/BriefcaseFill";

import style from "./Tile.module.css";

interface TileProps {
  active?: boolean;
  title: string;
  description: string;
  isHovered?: boolean;
  index: number;
}

const Tile: React.FC<TileProps> = ({
  active = false,
  title,
  description,
  isHovered,
  index,
}) => {
  let avatar = null;

  if (index === 0) {
    avatar = isHovered ? <UserFill /> : <User />;
  } else {
    avatar = isHovered ? <BriefcaseFill /> : <Briefcase />;
  }

  return (
    <CardHeader
      className={classNames(style.tile, {
        [style.item]: isHovered,
      })}
      avatar={avatar}
      title={<Typography variant="subtitle1">{title}</Typography>}
      subheader={<Typography variant="body2">{description}</Typography>}
      action={
        active && (
          <div className={style.iconContainer}>
            <RightArrowIcon className={style.rightArrowIcon} />
          </div>
        )
      }
    />
  );
};

export default Tile;
