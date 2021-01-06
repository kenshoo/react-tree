/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const TreeContainerRenderer = props => {
  const { containerRef, getStyles, children } = props;
  return (
    <div ref={containerRef} css={getStyles("container", props)}>
      {children}
    </div>
  );
};

export default TreeContainerRenderer;
