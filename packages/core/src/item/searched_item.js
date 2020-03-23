import React from "react";

const SearchedItem = ({ item = [""], searchIndex = 0, searchTerm = "" }) => {
  const leaf = item[item.length - 1];
  const parents = item.slice(0, item.length - 1).join(" / ");

  return (
    <div>
      <div>
        <span>{leaf.substring(0, searchIndex)}</span>
        <span><b>{leaf.substring(searchIndex, searchIndex + searchTerm.length)}</b></span>
        <span>{leaf.substring(searchIndex + searchTerm.length)}</span>
      </div>
      <div>{parents}</div>
    </div>
  );
};

export default SearchedItem;
