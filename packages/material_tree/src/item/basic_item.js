import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  selected: {
    fontWeight: props => (props.isSelected ? 600 : 400)
  }
});

const BasicItem = ({ label = "", isSelected = false }) => {
  const classes = useStyles({ isSelected });
  return (
    <ListItemText primary={<span className={classes.selected}>{label}</span>} />
  );
};

export default BasicItem;
