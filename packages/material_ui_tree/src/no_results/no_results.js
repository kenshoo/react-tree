import React from "react";
import { Warning } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const ITEMS_PADDING = 16;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: props => props.itemsHeight - ITEMS_PADDING
  }
});

const MaterialUINoResults = ({ text, itemsHeight }) => {
  const classes = useStyles({
    itemsHeight
  });
  return (
    <div className={classes.root}>
      <Warning fontSize="large" color="disabled" />
      <Typography variant="subtitle1">{text}</Typography>
    </div>
  );
};

export default MaterialUINoResults;
