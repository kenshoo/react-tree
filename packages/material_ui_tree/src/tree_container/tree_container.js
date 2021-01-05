import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const DEFAULT_WIDTH = 230;
const DEFAULT_HEIGHT = 300;
const PIXEL_SUFFIX = "px";

const useStyles = makeStyles(({ width, height }) => ({
  root: {
    width: (width || DEFAULT_WIDTH) + PIXEL_SUFFIX,
    height: (height || DEFAULT_HEIGHT) + PIXEL_SUFFIX
  }
}));

const MaterialUIContainerRenderer = ({ children, width, height }) => {
  const classes = useStyles({ width, height });
  return (
    <Card raised={true} className={classes.root}>
      {children}
    </Card>
  );
};

export default MaterialUIContainerRenderer;
