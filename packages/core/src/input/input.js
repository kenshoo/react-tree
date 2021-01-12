/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export const InputIconRenderer = () => <>🔍</>;
export const ClearIconRenderer = () => <>✘️</>;

const Input = props => {
  const {
    inputRef,
    searchTerm,
    onInputChange,
    getStyles,
    inputIconRenderer: InputIcon = InputIconRenderer,
    clearIconRenderer: ClearIcon = ClearIconRenderer
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
      {searchTerm !== "" && (
        <button css={getStyles("clearInput", props)} onClick={onInputChange}>
          <ClearIcon />
        </button>
      )}
    </div>
  );
};

export default Input;
