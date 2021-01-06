import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    width: props => props.width,
    height: props => props.height
  }
});

const MaterialUIContainerRenderer = props => {
  const { containerRef, children, width, height } = props;
  const classes = useStyles({ width, height });
  return (
    <Card ref={containerRef} raised={true} className={classes.root}>
      {children}
    </Card>
  );
};

export default MaterialUIContainerRenderer;
