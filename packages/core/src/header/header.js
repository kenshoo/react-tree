/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export const BackIconRenderer = () => <>⬅️</>;

const Header = props => {
  const {
    headerRef,
    parents = [],
    onClick,
    title = "",
    getStyles,
    backIconRenderer: BackIcon = BackIconRenderer
  } = props;
  return (
    <div ref={headerRef} css={getStyles("header", props)}>
      {parents.length > 0 && (
        <>
          <span css={getStyles("headerBackIcon", props)} onClick={onClick}>
            <BackIcon />
          </span>
          {parents[parents.length - 1]}
        </>
      )}
      {parents.length === 0 && <>{title}</>}
    </div>
  );
};

export default Header;
