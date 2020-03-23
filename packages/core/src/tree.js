/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";

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
    inputRenderer: Input = InputDefault,
    noResultsRenderer: NoResults = NoResultsDefault,
    itemRenderer: Item = ItemDefault
  } = props;
  const [currentDepth, setCurrentDepth] = useState(0);
  const [parents, setParents] = useState([]);

  const getStyles = (key, props = {}) => {
    const base = defaultStyles[key](props);
    base.boxSizing = "border-box";
    const custom = props.styles && props.styles[key];
    return custom ? custom(base, props) : base;
  };

  const [searchTerm, setSearchTerm, leaves] = useLeavesManager({
    structure,
    parents,
    currentDepth
  });

  const [onClick, onBackClick] = useItemCallbacks({
    parents,
    setParents,
    currentDepth,
    setCurrentDepth,
    onSelect
  });

  return (
    <div css={getStyles("tree", props)}>
      <Header
        parents={parents}
        title={title}
        onClick={onBackClick}
        getStyles={getStyles}
      >
        {title}
      </Header>
      <Input
        getStyles={getStyles}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
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
            />
          ))}
        {leaves && leaves.length === 0 && (
          <NoResults text={noResultsText} getStyles={getStyles} />
        )}
      </div>
    </div>
  );
};

export default Tree;
