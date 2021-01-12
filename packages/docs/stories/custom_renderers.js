import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  ArrowBack,
  ViewList,
  ArrowForward,
  Pageview
} from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  header: {
    padding: "8px 16px",
    backgroundColor: "lightgrey",
    color: "dimgray"
  },
  button: {
    marginLeft: -8,
    color: "dimgray"
  },
  forwardIcon: {
    color: "dimgray"
  }
});

export const CustomHeader = ({ headerRef, title, parents, onClick }) => {
  const classes = useStyles();
  return (
    <div ref={headerRef}>
      <CardActions className={classes.header}>
        <IconButton className={classes.button} size={"small"}>
          {parents.length > 0 ? <ArrowBack onClick={onClick} /> : <ViewList />}
        </IconButton>
        <Typography variant="subtitle1">{title}</Typography>
      </CardActions>
      <Divider />
    </div>
  );
};

export const CustomForwardIcon = () => {
  const classes = useStyles();
  return <ArrowForward className={classes.forwardIcon} />;
};

export const CustomSearchIcon = () => {
  const classes = useStyles();
  return <Pageview className={classes.forwardIcon} />;
};

export const customStyles = {
  header: () => ({
    height: "60px",
    display: "flex",
    alignItems: "center",
    padding: "0 6px",
    background: "white",
    paddingLeft: "50px",
    fontWeight: "bold"
  })
};
