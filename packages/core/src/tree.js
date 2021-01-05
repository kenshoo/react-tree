/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import { defaultStyles } from "./styles/styles";
import ItemDefault from "./item/item";
import HeaderDefault from "./header/header";
import InputDefault from "./input/input";
import NoResultsDefault from "./no_results/no_results";

import useLeavesManager from "./hooks/use_leaves_manager";
import useItemCallbacks from "./hooks/use_item_callbacks";

const Tree = props => {
  const {
    structure = [],
    title,
    onSelect,
    className,
    noResultsText = "No matching results",
    styles,
    headerRenderer: Header = HeaderDefault,
    backIconRenderer,
    inputRenderer: Input = InputDefault,
    inputIconRenderer,
    noResultsRenderer: NoResults = NoResultsDefault,
    noResultsIconRenderer,
    itemRenderer: Item = ItemDefault,
    forwardIconRenderer
  } = props;

  const getStyles = (key, props = {}) => {
    const base = defaultStyles[key](props);
    base.boxSizing = "border-box";
    const custom = props.styles && props.styles[key];
    return custom ? custom(base, props) : base;
  };

  const { onClick, onBackClick, currentDepth, parents } = useItemCallbacks(
    onSelect
  );

  const { searchTerm, setSearchTerm, leaves } = useLeavesManager({
    structure,
    parents,
    currentDepth
  });

  return (
    <div css={getStyles("tree", props)}>
      <Header
        parents={parents}
        title={title}
        onClick={onBackClick}
        getStyles={getStyles}
        backIconRenderer={backIconRenderer}
      >
        {title}
      </Header>
      <Input
        getStyles={getStyles}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        inputIconRenderer={inputIconRenderer}
      />
      <div css={getStyles("items", props)}>
        {leaves &&
          leaves.length > 0 &&
          leaves.map(item => (
            <Item
              getStyles={getStyles}
              searchTerm={searchTerm}
              item={item}
              onClick={onClick}
              forwardIconRenderer={forwardIconRenderer}
            />
          ))}
        {leaves && leaves.length === 0 && (
          <NoResults
            text={noResultsText}
            getStyles={getStyles}
            noResultsIconRenderer={noResultsIconRenderer}
          />
        )}
      </div>
    </div>
  );
};

export default Tree;
