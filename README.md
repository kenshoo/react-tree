# React Tress

[![Build Status](https://travis-ci.org/kenshoo/react-tree.svg?branch=master)](https://travis-ci.org/kenshoo/react-tree)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7b44acc9042c5ee410a8/test_coverage)](https://codeclimate.com/github/kenshoo/react-tree/test_coverage)

Code usage:


 <!-- example -->

```jsx
import ReactTree from "@kenshooui/react-tree";

const structure = [
  ["Profiles", "Performance", "Clicks"],
  ["Profiles", "Performance", "Imp"],
  ["Profiles", "Attribute", "Agency"],
  ["Profiles", "Attribute", "Progress"],
  ["Profiles", "Attribute", "Create Date"],
  ["Campaigns", "Performance", "Clicks"],
  ["Campaigns", "Performance", "Cost"],
  ["Campaigns", "Performance", "CTR"],
  ["Campaigns", "Attribute", "campaign name"],
  ["Ad Groups", "Attribute", "Ad Group Name"]
];

<ReactTree
  structure={structure}
  title={"Add filter criteria"}
  onSelect={() => {}}
/>;
```

## Props

| Name                | Type      | Default                | Description                                                     |
| :------------------ | :-------- | :--------------------- | :-------------------------------------------------------------- |
| `structure`         | `Array`   | `[]`                   | `Component input - array of leaves along with their ancestors`  |
| `title`             | `String`  | ``                     | `Title to be displayed on root mode`                            |
| `onSelect`          | `Func`    | ``                     | `callback when clicking a leaf`                                 |
| `NoResultsRenderer` | ``        | `no_matching_items.js` | `renderer when having no results on searching`                  |
