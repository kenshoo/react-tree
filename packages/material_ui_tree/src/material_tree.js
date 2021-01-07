import React from "react";
import Tree from "@kenshooui/react-tree";
import MaterialItemRenderer from "./item/item";
import MaterialInputRenderer from "./input/input";
import MaterialUIContainerRenderer from "./tree_container/tree_container";
import MaterialHeaderRenderer from "./header/header";
import MaterialItemsRenderer from "./items/items";
import MaterialNoResultsRenderer from "./no_results/no_results";

const noop = () => {};

const MaterialTree = ({
  structure = [],
  title = "",
  onSelect = noop,
  width,
  height,
  treeContainerRenderer = MaterialUIContainerRenderer,
  headerRenderer = MaterialHeaderRenderer,
  inputRenderer = MaterialInputRenderer,
  itemRenderer = MaterialItemRenderer,
  itemsRenderer = MaterialItemsRenderer,
  noResultsRenderer = MaterialNoResultsRenderer
}) => {
  return (
    <Tree
      structure={structure}
      title={title}
      onSelect={onSelect}
      width={width}
      height={height}
      treeContainerRenderer={treeContainerRenderer}
      headerRenderer={headerRenderer}
      inputRenderer={inputRenderer}
      itemRenderer={itemRenderer}
      itemsRenderer={itemsRenderer}
      noResultsRenderer={noResultsRenderer}
    />
  );
};

export default MaterialTree;
