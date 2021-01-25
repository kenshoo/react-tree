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
import TreeContainerRenderer from "./tree_container/tree_container";
import ItemsRenderer from "./items/items";
import useContainerHeight from "./hooks/use_components_refs";

const DEFAULT_WIDTH = 230;
const DEFAULT_HEIGHT = 300;
const PIXEL_SUFFIX = "px";

const Tree = props => {
  const {
    structure = [],
    title,
    onSelect,
    width,
    height,
    styles,
    className,
    noResultsText = "No matching results",
    headerRenderer: Header = HeaderDefault,
    backIconRenderer,
    inputRenderer: Input = InputDefault,
    inputIconRenderer,
    clearIconRenderer,
    noResultsRenderer: NoResults = NoResultsDefault,
    noResultsIconRenderer,
    itemRenderer: Item = ItemDefault,
    itemsRenderer: Items = ItemsRenderer,
    forwardIconRenderer,
    treeContainerRenderer: TreeContainer = TreeContainerRenderer,
    customItemsRenderer,
    selectedItem
  } = props;

  const getStyles = (key, props = {}) => {
    const base = defaultStyles[key](props);
    base.boxSizing = "border-box";
    const custom = props.styles && props.styles[key];
    return custom ? custom(base, props) : base;
  };

  const {
    containerRef,
    headerRef,
    inputRef,
    itemsHeight
  } = useContainerHeight();

  const { onClick, onBackClick, currentDepth, parents } = useItemCallbacks({
    onSelect
  });

  const { searchTerm, onInputChange, leaves } = useLeavesManager({
    structure,
    parents,
    currentDepth
  });

  return (
    <TreeContainer
      containerRef={containerRef}
      getStyles={getStyles}
      styles={styles}
      width={(width || DEFAULT_WIDTH) + PIXEL_SUFFIX}
      height={(height || DEFAULT_HEIGHT) + PIXEL_SUFFIX}
    >
      <Header
        headerRef={headerRef}
        parents={parents}
        title={title}
        onClick={onBackClick}
        getStyles={getStyles}
        styles={styles}
        backIconRenderer={backIconRenderer}
      >
        {title}
      </Header>
      <Input
        inputRef={inputRef}
        getStyles={getStyles}
        styles={styles}
        searchTerm={searchTerm}
        onInputChange={onInputChange}
        inputIconRenderer={inputIconRenderer}
        clearIconRenderer={clearIconRenderer}
      />
      {customItemsRenderer ? (
        React.cloneElement(customItemsRenderer, {
          ...props,
          leaves,
          searchTerm,
          onClick
        })
      ) : (
        <Items styles={styles} getStyles={getStyles} height={itemsHeight}>
          {leaves &&
            leaves.length > 0 &&
            leaves.map(item => (
              <Item
                getStyles={getStyles}
                searchTerm={searchTerm}
                item={item}
                onClick={onClick}
                forwardIconRenderer={forwardIconRenderer}
                selectedItem={selectedItem}
              />
            ))}
        </Items>
      )}
      {leaves && leaves.length === 0 && (
        <NoResults
          height={itemsHeight}
          text={noResultsText}
          getStyles={getStyles}
          styles={styles}
          noResultsIconRenderer={noResultsIconRenderer}
        />
      )}
    </TreeContainer>
  );
};

export default Tree;
