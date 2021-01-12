import React from "react";
import { ChevronLeft } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "8px 16px"
  },
  button: {
    marginLeft: -8
  }
}));

const noop = () => {};

const MaterialHeaderRenderer = ({
  headerRef,
  parents = [],
  onClick = noop,
  title = "",
  backIconRenderer: BackIcon = ChevronLeft
}) => {
  const classes = useStyles();
  return (
    <div ref={headerRef}>
      <CardActions className={classes.root}>
        {parents.length > 0 && (
          <IconButton className={classes.button} size={"small"}>
            <BackIcon onClick={onClick} />
          </IconButton>
        )}
        <Typography variant="subtitle1">
          {parents.length > 0 ? parents[parents.length - 1] : title}
        </Typography>
      </CardActions>
      <Divider />
    </div>
  );
};

export default MaterialHeaderRenderer;
