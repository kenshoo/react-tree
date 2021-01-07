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
    height: props => props.height - ITEMS_PADDING
  }
});

const MaterialNoResultsRenderer = ({ text, height }) => {
  const classes = useStyles({
    height
  });
  return (
    <div className={classes.root}>
      <Warning fontSize="large" color="disabled" />
      <Typography variant="subtitle1">{text}</Typography>
    </div>
  );
};

export default MaterialNoResultsRenderer;
