/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useRef } from "react";

import { defaultStyles } from "./styles/styles";
import ItemDefault from "./item/item";
import HeaderDefault from "./header/header";
import InputDefault from "./input/input";
import NoResultsDefault from "./no_results/no_results";

import useLeavesManager from "./hooks/use_leaves_manager";
import useItemCallbacks from "./hooks/use_item_callbacks";
import TreeContainerRenderer from "./tree_container/tree_container";
import ItemsRenderer from "./items/items";
import useTreeHeight from "./hooks/use_ref_height";

const Tree = props => {
  const {
    structure = [],
    title,
    onSelect,
    noResultsText = "No matching results",
    headerRenderer: Header = HeaderDefault,
    backIconRenderer,
    inputRenderer: Input = InputDefault,
    inputIconRenderer,
    noResultsRenderer: NoResults = NoResultsDefault,
    noResultsIconRenderer,
    itemRenderer: Item = ItemDefault,
    itemsRenderer: Items = ItemsRenderer,
    forwardIconRenderer,
    treeContainerRenderer: TreeContainer = TreeContainerRenderer
  } = props;

  const getStyles = (key, props = {}) => {
    const base = defaultStyles[key](props);
    base.boxSizing = "border-box";
    const custom = props.styles && props.styles[key];
    return custom ? custom(base, props) : base;
  };

  const ref = useRef();
  const treeHeight = useTreeHeight({ ref });

  const { onClick, onBackClick, currentDepth, parents } = useItemCallbacks(
    onSelect
  );

  const { searchTerm, setSearchTerm, leaves } = useLeavesManager({
    structure,
    parents,
    currentDepth
  });

  return (
    <TreeContainer getStyles={getStyles} innerRef={ref}>
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
      <Items getStyles={getStyles} treeHeight={treeHeight}>
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
      </Items>
    </TreeContainer>
  );
};

export default Tree;
