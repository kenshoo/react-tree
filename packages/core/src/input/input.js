/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export const InputIconRenderer = () => <>🔍</>;

const Input = props => {
  const {
    inputRef,
    searchTerm,
    onInputChange,
    getStyles,
    inputIconRenderer: InputIcon = InputIconRenderer
  } = props;
  return (
    <div ref={inputRef} css={getStyles("inputWrapper", props)}>
      <span css={getStyles("searchInput", props)}>
        <InputIcon />
      </span>
      <input
        css={getStyles("input", props)}
        value={searchTerm}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Input;
