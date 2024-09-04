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
  title,
  description,
  isHovered,
  index,
}) => {
  let avatar = null;

  if (index === 0) {
    avatar = isHovered ? <BriefcaseFill /> : <Briefcase />;
  } else {
    avatar = isHovered ? <UserFill /> : <User />;
  }

  return (
    <CardHeader
      sx={{
        marginTop: index > 0 ? "19px" : "0px",
        padding: {
          xs: "8px 18px",
          sm: "0px 28px",
        },
      }}
      className={classNames(style.tile, {
        [style.item]: isHovered,
      })}
      avatar={avatar}
      title={
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "12px",
              sm: "16px",
            },
            lineHeight: { xs: "20px", sm: "24px" },
          }}
        >
          {title}
        </Typography>
      }
      subheader={
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: "8px",
              sm: "14px",
            },
            lineHeight: { xs: "14px", sm: "21px" },
          }}
        >
          {description}
        </Typography>
      }
      classes={{
        action: style.action,
      }}
      action={
        isHovered && (
          <div className={style.iconContainer}>
            <RightArrowIcon className={style.rightArrowIcon} />
          </div>
        )
      }
    />
  );
};

export default Tile;
