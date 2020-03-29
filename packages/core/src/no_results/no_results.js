/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export const NoResultsIconRenderer = () => <>⚠️</>;

const NoResults = props => {
  const {
    text,
    getStyles,
    noResultsIconRenderer: NoResultsIcon = NoResultsIconRenderer
  } = props;
  return (
    <div css={getStyles("noResults", props)}>
      <div css={getStyles("noResultsIcon", props)}>
        <NoResultsIcon />
      </div>
      <div css={getStyles("noResultsText", props)}>{text}</div>
    </div>
  );
};

export default NoResults;
