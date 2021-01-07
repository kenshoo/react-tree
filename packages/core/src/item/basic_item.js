/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const BasicItem = props => {
  const { label = "", getStyles } = props;
  return <span css={getStyles("selectedItem", props)}>{label}</span>;
};

export default BasicItem;
