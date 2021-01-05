import React from "react";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(({ treeHeight }) => ({
  root: {
    overflow: "auto",
    maxHeight: treeHeight - 48 - 42
  }
}));

const MaterialUIItemsRenderer = ({ children, treeHeight }) => {
  const classes = useStyles({ treeHeight });
  return (
    <List className={classes.root} component="nav">
      {children}
    </List>
  );
};

export default MaterialUIItemsRenderer;
