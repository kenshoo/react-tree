import React from "react";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const ITEMS_PADDING = 16;

const useStyles = makeStyles({
  root: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: props => props.height - ITEMS_PADDING
  }
});

const MaterialItemsRenderer = ({ children, height }) => {
  const classes = useStyles({ height });
  return (
    <List className={classes.root} component="nav">
      {children}
    </List>
  );
};

export default MaterialItemsRenderer;
