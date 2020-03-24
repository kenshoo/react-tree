/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const Header = props => {
  const { parents = [], onClick, title = "", getStyles } = props;
  return (
    <div css={getStyles("header", props)}>
      {parents.length > 0 && (
        <>
          <span css={getStyles("headerBackIcon", props)} onClick={onClick}>
            ⬅️
          </span>
          {parents[parents.length - 1]}
        </>
      )}
      {parents.length === 0 && <>{title}</>}
    </div>
  );
};

export default Header;
