import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  boldText: {
    fontWeight: "bold"
  }
}));

const SearchedItem = ({ item = [""], searchIndex = 0, searchTerm = "" }) => {
  const classes = useStyles();
  const leaf = item[item.length - 1];
  const parents = item.slice(0, item.length - 1).join(" / ");

  return (
    <ListItemText
      primary={
        <>
          <Typography component="span">
            {leaf.substring(0, searchIndex)}
          </Typography>
          <Typography component="span" className={classes.boldText}>
            {leaf.substring(searchIndex, searchIndex + searchTerm.length)}
          </Typography>
          <Typography component="span">
            {leaf.substring(searchIndex + searchTerm.length)}
          </Typography>
        </>
      }
      secondary={parents}
    />
  );
};

export default SearchedItem;
