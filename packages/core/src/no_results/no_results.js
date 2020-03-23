/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";


const NoResults = props => {
  const { text, getStyles } = props;
  return (
    <div css={getStyles('noResults', props)}>
      <div css={getStyles('noResultsIcon', props)}>⚠️</div>
      <div css={getStyles('noResultsText', props)}>{text}</div>
    </div>
  );
};

export default NoResults;