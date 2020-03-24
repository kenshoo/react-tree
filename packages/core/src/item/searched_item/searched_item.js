/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const SearchedItem = props => {
  const { item = [""], searchIndex = 0, searchTerm = "", getStyles } = props;
  const leaf = item[item.length - 1];
  const parents = item.slice(0, item.length - 1).join(" / ");

  return (
    <div>
      <div>
        <span css={getStyles("searchItemInitial", props)}>
          {leaf.substring(0, searchIndex)}
        </span>
        <span css={getStyles("highlight", props)}>
          {leaf.substring(searchIndex, searchIndex + searchTerm.length)}
        </span>
        <span css={getStyles("searchItemInitial", props)}>
          {leaf.substring(searchIndex + searchTerm.length)}
        </span>
      </div>
      <div css={getStyles("parents", props)}>{parents}</div>
    </div>
  );
};

export default SearchedItem;
