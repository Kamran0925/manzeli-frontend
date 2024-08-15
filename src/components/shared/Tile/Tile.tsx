import React from "react";
import { Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import classNames from "classnames";

import { RightArrowIcon } from "../../../assets/icons/ui/RightArrow";
import { Briefcase } from "../../../assets/icons/ui/Briefcase";
import { User } from "../../../assets/icons/ui/User";

import style from "./Tile.module.css";

interface TileProps {
  active?: boolean;
  title: string;
  description: string;
}

const Tile: React.FC<TileProps> = ({ active = false, title, description }) => {
  return (
    <CardHeader
      className={classNames(style.tile, {
        [style.item]: active,
      })}
      avatar={active ? <User /> : <Briefcase />}
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
