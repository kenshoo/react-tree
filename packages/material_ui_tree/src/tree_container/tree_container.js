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

const MaterialUIContainerRenderer = props => {
  const { children, width, height } = props;
  const classes = useStyles({ width, height });
  const Container = React.forwardRef((props, ref) => (
    <div {...props} ref={ref} />
  ));
  return (
    <Card raised={true} className={classes.root} component={Container}>
      {children}
    </Card>
  );
};

export default MaterialUIContainerRenderer;
