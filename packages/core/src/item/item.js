/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";

import SearchedItem from "./searched_item";
import BasicItem from "./basic_item";


const ItemRenderer = props => {
  const {
    getStyles,
    searchTerm = "",
    item: { item, hasChild, currentDepth } = {
      item: [""],
      hasChild: false,
      currentDepth: 0
    },
    onClick
  } = props;
  const searchIndex = item[item.length - 1]
    .toLowerCase()
    .indexOf(searchTerm.trim().toLowerCase());
  return (
      <div
        onClick={() => onClick(item[currentDepth], item, hasChild)}
        css={getStyles('item', props)}
      >
        {searchTerm !== "" && (
          <SearchedItem
            item={item}
            searchIndex={searchIndex}
            searchTerm={searchTerm.trim()}
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
          <span>➡️</span>
        )}
      </div>
  );
};

export default ItemRenderer;
