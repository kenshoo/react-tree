import React from "react";
import BasicItem from "./basic_item";
import { ChevronRight } from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import SearchedItem from "./searched_item";

const noop = () => {};
const defaultSelectedItem = { item: [], leaf: "" };

const MaterialItemRenderer = props => {
  const {
    searchTerm = "",
    item: { item, hasChild, currentDepth } = {
      item: [""],
      hasChild: false,
      currentDepth: 0
    },
    onClick = noop,
    selectedItem = defaultSelectedItem,
    forwardIconRenderer: ForwardIcon = ChevronRight
  } = props;

  const isItemSelected = item.toString() === selectedItem.item.toString();
  const searchIndex = item[item.length - 1]
    .toLowerCase()
    .indexOf(searchTerm.trim().toLowerCase());
  return (
    <ListItem
      button
      onClick={() => onClick(item[currentDepth], item, hasChild)}
    >
      {searchTerm !== "" && (
        <SearchedItem
          item={item}
          searchIndex={searchIndex}
          searchTerm={searchTerm.trim()}
          isSelected={
            isItemSelected && item[item.length - 1] === selectedItem.leaf
          }
        />
      )}
      {searchTerm === "" && (
          <BasicItem
              label={item[currentDepth]}
              isSelected={
                isItemSelected && item[currentDepth] === selectedItem.leaf
              }
          />
      )}
      {hasChild && <ForwardIcon />}
    </ListItem>
  );
};

export default MaterialItemRenderer;
