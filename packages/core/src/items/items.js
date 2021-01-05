/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const ItemsRenderer = props => {
  const {
    getStyles,
    children
  } = props;
  return (
      <div css={getStyles("items", props)}>
        {children}
      </div>
  );
};

export default ItemsRenderer;
