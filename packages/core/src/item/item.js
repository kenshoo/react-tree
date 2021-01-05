/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import SearchedItem from "./searched_item/searched_item";
import BasicItem from "./basic_item";

export const ForwardIconRenderer = () => <>➡️</>;

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
    forwardIconRenderer: ForwardIcon = ForwardIconRenderer
  } = props;
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
        />
      )}
      {searchTerm === "" && (
        <BasicItem
          label={item[currentDepth]}
          searchIndex={searchIndex}
          searchTerm={searchTerm.trim()}
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
