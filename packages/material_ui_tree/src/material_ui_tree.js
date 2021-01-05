import React from "react";
import Tree from "@kenshooui/react-tree";
import MaterialUIItemRenderer from "./item/item";
import MaterialUIInputRenderer from "./input/input";
import MaterialUIContainerRenderer from "./tree_container/tree_container";
import MaterialUIHeader from "./header/header";
import MaterialUIItemsRenderer from "./items/items";
import MaterialUINoResults from "./no_results/no_results";

const MaterialUITree = ({
  structure = [],
  title,
  onSelect,
  width,
  height,
  treeContainerRenderer = MaterialUIContainerRenderer,
  headerRenderer = MaterialUIHeader,
  inputRenderer = MaterialUIInputRenderer,
  itemRenderer = MaterialUIItemRenderer,
  itemsRenderer = MaterialUIItemsRenderer,
  noResultsRenderer = MaterialUINoResults
}) => {
  return (
    <Tree
      structure={structure}
      title={title}
      onSelect={onSelect}
      treeContainerRenderer={props =>
        treeContainerRenderer({ ...props, width, height })
      }
      headerRenderer={headerRenderer}
      inputRenderer={inputRenderer}
      itemRenderer={itemRenderer}
      itemsRenderer={itemsRenderer}
      noResultsRenderer={noResultsRenderer}
    />
  );
};

export default MaterialUITree;
