import { Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./Tile.module.css";
import { User } from "../../../assets/icons/ui/User";
import { Polygon } from "../../../assets/icons/ui/Polygon";
import { RightArrowIcon } from "../../../assets/icons/ui/RightArrow";

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
      avatar={
        <div
          style={{
            width: "52px",
            height: "52px",
            position: "relative",
          }}
        >
          <User />
          <Polygon />
        </div>
      }
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

Tile.propTypes = {
  active: PropTypes.bool,
};

Tile.defaultProps = {
  active: false,
};

export default Tile;
