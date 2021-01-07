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
  backIconRenderer,
  inputRenderer = MaterialInputRenderer,
  inputIconRenderer,
  clearIconRenderer,
  itemRenderer = MaterialItemRenderer,
  forwardIconRenderer,
  itemsRenderer = MaterialItemsRenderer,
  noResultsRenderer = MaterialNoResultsRenderer,
  noResultsText,
  noResultsIconRenderer,
  markSelectedItem = false
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
      backIconRenderer={backIconRenderer}
      inputRenderer={inputRenderer}
      inputIconRenderer={inputIconRenderer}
      clearIconRenderer={clearIconRenderer}
      itemRenderer={itemRenderer}
      forwardIconRenderer={forwardIconRenderer}
      itemsRenderer={itemsRenderer}
      noResultsRenderer={noResultsRenderer}
      noResultsText={noResultsText}
      noResultsIconRenderer={noResultsIconRenderer}
      markSelectedItem={markSelectedItem}
    />
  );
};

export default MaterialTree;
