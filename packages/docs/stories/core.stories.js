import React from "react";
import MaterialUITree from "@kenshooui/material_ui_tree";
import Tree from "@kenshooui/react-tree";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row"
  },
  tree: {
    padding: 20
  }
});

export default {
  title: "Tree",
  component: MaterialUITree
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
    <div className={classes.root}>
      <div className={classes.tree}>
        <MaterialUITree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
          width={300}
          height={400}
        />
      </div>
      <div className={classes.tree}>
        <Tree
          structure={structure}
          title={"Choose an item"}
          onSelect={item => alert(item)}
        />
      </div>
    </div>
  );
};

Basic.story = {
  name: "basic configuration"
};
