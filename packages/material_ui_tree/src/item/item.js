import React from "react";
import BasicItem from "./basic_item";
import { ChevronRight } from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import SearchedItem from "./searched_item";

const noop = () => {};

const MaterialUIItemRenderer = props => {
  const {
    searchTerm = "",
    item: { item, hasChild, currentDepth } = {
      item: [""],
      hasChild: false,
      currentDepth: 0
    },
    onClick = noop
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
      {hasChild && <ChevronRight />}
    </ListItem>
  );
};

export default MaterialUIItemRenderer;
