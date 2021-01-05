import React from "react";
import { Clear, Search } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

const MaterialUIInputRenderer = ({
  searchTerm = "",
  setSearchTerm = () => {}
}) => {
  return (
    <>
      <CardActions>
        <InputBase
          id="input-with-icon-adornment"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          endAdornment={
            searchTerm !== "" && (
              <IconButton size={"small"}>
                <Clear onClick={() => setSearchTerm("")} />
              </IconButton>
            )
          }
        />
      </CardActions>
      <Divider />
    </>
  );
};

export default MaterialUIInputRenderer;
