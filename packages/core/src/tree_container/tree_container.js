/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const TreeContainerRenderer = props => {
  const {
    getStyles,
    children
  } = props;
  return (
      <div css={getStyles("tree", props)}>
        {children}
    </div>
  );
};

export default TreeContainerRenderer;
