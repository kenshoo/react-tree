/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";


const Input = props => {
  const { searchTerm, setSearchTerm, getStyles } = props;
  return (
    <div css={getStyles('inputWrapper', props)}>
      <span css={getStyles('searchInput', props)}>🔍</span>
      <input css={getStyles('input', props)}
        value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    </div>
  );
};

export default Input;