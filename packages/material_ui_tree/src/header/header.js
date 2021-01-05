import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

const MaterialUIHeader = ({ parents = [], onClick, title = "" }) => {
  return (
    <>
      <CardActions>
        {parents.length > 0 && (
          <IconButton size={"small"}>
            <ChevronLeft onClick={onClick} />
          </IconButton>
        )}
        <Typography variant="subtitle1">
          {parents.length > 0 ? parents[parents.length - 1] : title}
        </Typography>
      </CardActions>
      <Divider />
    </>
  );
};

export default MaterialUIHeader;
