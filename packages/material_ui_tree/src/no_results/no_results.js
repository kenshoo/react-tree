import React from "react";
import { Warning } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const MaterialUINoResults = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Warning fontSize="large" color="disabled" />
      <Typography variant="subtitle1">{text}</Typography>
    </div>
  );
};

export default MaterialUINoResults;
