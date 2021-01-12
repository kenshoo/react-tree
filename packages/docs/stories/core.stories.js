import React from "react";
import Tree from "@kenshooui/react-tree";
import MaterialTree from "@kenshooui/material-tree";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  CustomForwardIcon,
  CustomHeader,
  CustomSearchIcon,
  customStyles
} from "./custom_renderers";

const useStyles = makeStyles({
  wrapper: {
    padding: 40,
    display: "flex",
    justifyContent: "start",
    alignItems: "start"
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginRight: 25,
    flexDirection: "column"
  },
  title: {
    fontSize: 16,
    color: "#747070",
    marginBottom: 16,
    fontWeight: "bold"
  }
});

export default {
  title: "Tree",
  component: Tree
};

const structure = [
  ["Profiles", "Performance", "Clicks"],
  ["Profiles", "Performance", "Cost"],
  ["Profiles", "Performance", "CTR"],
  ["Profiles", "Performance", "Imp"],
  ["Profiles", "Attribute", "Profile Id"],
  ["Profiles", "Attribute", "Currency Code"],
  ["Profiles", "Attribute", "Profile Name"],
  ["Profiles", "Attribute", "Profile Status"],
  ["Profiles", "Attribute", "Agency"],
  ["Profiles", "Attribute", "Progress"],
  ["Profiles", "Attribute", "Create Date"],
  ["Campaigns", "Performance", "Clicks"],
  ["Campaigns", "Performance", "Cost"],
  ["Campaigns", "Performance", "CTR"],
  ["Campaigns", "Attribute", "campaign name"],
  ["Campaigns", "Attribute", "campaign channel name"],
  ["Ad Groups", "Attribute", "Ad Group Id"],
  ["Ad Groups", "Attribute", "Ad Group Name"],
  ["Ads", "Performance", "Clicks"],
  ["Keywords", "one level"]
];

export const Basic = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <div className={classes.title}>Default Tree</div>
        <Tree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
        />
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Custom Renderers</div>
        <Tree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
          headerRenderer={CustomHeader}
          forwardIconRenderer={CustomForwardIcon}
          inputIconRenderer={CustomSearchIcon}
        />
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Custom Styles</div>
        <Tree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
          styles={customStyles}
        />
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Custom Dimensions</div>
        <Tree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export const MaterialTheme = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <div className={classes.title}>Default Tree</div>
        <MaterialTree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
        />
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Custom Renderers</div>
        <MaterialTree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
          headerRenderer={CustomHeader}
          forwardIconRenderer={CustomForwardIcon}
          inputIconRenderer={CustomSearchIcon}
        />
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Custom Dimensions</div>
        <MaterialTree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
          width={250}
          height={350}
        />
      </div>
    </div>
  );
};

Basic.story = {
  name: "Basic configuration"
};

MaterialTheme.story = {
  name: "Material Theme"
};
