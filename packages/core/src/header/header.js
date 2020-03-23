/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";


const Header = props => {
  const { parents = [], onClick, title = "", getStyles } = props;
  return (
    <div css={getStyles('header', props)}>
      {parents.length > 0 && (
        <>
          <span css={getStyles('headerBackIcon', props)} onClick={onClick}>
            ⬅️
          </span>
          <span>{parents[parents.length - 1]}</span>
        </>
      )}
      {parents.length === 0 && <span>{title}</span>}
    </div>
  );
};

export default Header;