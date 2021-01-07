import React from "react";
import { Clear, Search } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "8px 16px"
  }
}));

const noop = () => {};

const MaterialInputRenderer = ({
  inputRef,
  searchTerm = "",
  onInputChange = noop
}) => {
  const classes = useStyles();
  return (
    <div ref={inputRef}>
      <CardActions className={classes.root}>
        <InputBase
          value={searchTerm}
          onChange={onInputChange}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          endAdornment={
            searchTerm !== "" && (
              <IconButton size={"small"}>
                <Clear onClick={onInputChange} />
              </IconButton>
            )
          }
        />
      </CardActions>
      <Divider />
    </div>
  );
};

export default MaterialInputRenderer;
