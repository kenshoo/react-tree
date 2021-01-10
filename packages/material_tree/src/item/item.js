import React from "react";
import BasicItem from "./basic_item";
import { ChevronRight } from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import SearchedItem from "./searched_item";

const noop = () => {};

const MaterialItemRenderer = props => {
  const {
    searchTerm = "",
    item: { item, hasChild, currentDepth } = {
      item: [""],
      hasChild: false,
      currentDepth: 0
    },
    onClick = noop,
    forwardIconRenderer: ForwardIcon = ChevronRight
  } = props;
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
        />
      )}
      {searchTerm === "" && <BasicItem label={item[currentDepth]} />}
      {hasChild && <ForwardIcon />}
    </ListItem>
  );
};

export default MaterialItemRenderer;
