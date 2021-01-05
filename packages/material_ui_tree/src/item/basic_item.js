import React from "react";
import ListItemText from "@material-ui/core/ListItemText";

const BasicItem = ({ label = "" }) => {
  return <ListItemText primary={label} />;
};

export default BasicItem;
