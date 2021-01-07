/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import SearchedItem from "./searched_item/searched_item";
import BasicItem from "./basic_item";

export const ForwardIconRenderer = () => <>➡️</>;
const defaultSelectedItem = { item: [], leaf: "" };

const ItemRenderer = props => {
  const {
    getStyles,
    searchTerm = "",
    item: { item, hasChild, currentDepth } = {
      item: [""],
      hasChild: false,
      currentDepth: 0
    },
    onClick,
    forwardIconRenderer: ForwardIcon = ForwardIconRenderer,
    selectedItem = defaultSelectedItem
  } = props;
  const isItemSelected = item.toString() === selectedItem.item.toString();
  const searchIndex = item[item.length - 1]
    .toLowerCase()
    .indexOf(searchTerm.trim().toLowerCase());
  return (
    <div
      onClick={() => onClick(item[currentDepth], item, hasChild)}
      css={getStyles("item", props)}
    >
      {searchTerm !== "" && (
        <SearchedItem
          item={item}
          searchIndex={searchIndex}
          searchTerm={searchTerm.trim()}
          getStyles={getStyles}
          isSelected={
            isItemSelected && item[item.length - 1] === selectedItem.leaf
          }
        />
      )}
      {searchTerm === "" && (
        <BasicItem
          getStyles={getStyles}
          label={item[currentDepth]}
          isSelected={
            isItemSelected && item[currentDepth] === selectedItem.leaf
          }
        />
      )}
      {hasChild && (
        <span css={getStyles("forwardIcon", props)}>
          <ForwardIcon />
        </span>
      )}
    </div>
  );
};

export default ItemRenderer;
