import React from "react";
import Tree from "@kenshooui/react-tree";

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

export const Basic = () => (
  <Tree
    structure={structure}
    title={"Choose an item"}
    onSelect={item => alert(item)}
  />
);

Basic.story = {
  name: "basic configuration"
};
