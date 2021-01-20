import React, { useState } from "react";

export const MarkSelectedItemTree = ({
  structure,
  treeComponent: TreeComponent
}) => {
  const [selectedItem, setSelectedItem] = useState({ item: [], leaf: "" });
  return (
    <TreeComponent
      structure={structure}
      title={"Choose an item"}
      onSelect={item => {
        setSelectedItem({ item, leaf: item[item.length - 1] });
        alert(item);
      }}
      selectedItem={selectedItem}
    />
  );
};
