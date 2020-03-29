/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export const InputIconRenderer = () => <>🔍</>;

const Input = props => {
  const {
    searchTerm,
    setSearchTerm,
    getStyles,
    inputIconRenderer: InputIcon = InputIconRenderer
  } = props;
  return (
    <div css={getStyles("inputWrapper", props)}>
      <span css={getStyles("searchInput", props)}>
        <InputIcon />
      </span>
      <input
        css={getStyles("input", props)}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Input;
