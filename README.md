# React Tree

[![Build Status](https://travis-ci.org/kenshoo/react-tree.svg?branch=master)](https://travis-ci.org/kenshoo/react-tree)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7b44acc9042c5ee410a8/test_coverage)](https://codeclimate.com/github/kenshoo/react-tree/test_coverage)

React Tree is a straight forward component that allows a user to display and manage a hierarchical structure of items in a clear and comfortable way.

 ## Optional Themes
 
Two optional themes are supported when using React Tree:
 #### Basic tree
 Includes all the logic, based on @emotion/core - [README](https://github.com/kenshoo/react-tree/blob/master/packages/core/README.md)

  <p align="center">
      <img src="core-tree-demo.gif?raw=true" width="288" />
  </p>
  
 #### Material tree 
 Based on the basic tree logic, using Material-UI components - [README](https://github.com/kenshoo/react-tree/blob/master/packages/material_tree/README.md)

  <p align="center">
      <img src="react-tree-demo.gif?raw=true" width="288" />
  </p>

Both options support component customization. - [examples](https://github.com/kenshoo/react-tree/blob/master/packages/docs/stories/core.stories.js)

<br/>

### Props

| Name                   | Type        | Default                | Description                                                     |
| :------------------    | :---------- | :--------------------- | :-------------------------------------------------------------- |
| `structure`            | `Array`     | `[]`                   | `Component input - array of leaves along with their ancestors`  |
| `title`                | `String`    | `""`                   | `Title to be displayed on root mode`                            |
| `onSelect`             | `Func`      | `() => {}`             | `callback when clicking a leaf`                                 |
| `styles`               | `Object`    |                        | `Optional - enables customized styles`                          |
| `width`                | `number`    | `230 `                 | `The width of the tree component`                               |
| `height`               | `number`    | `300 `                 | `The height of the tree component`                              |
| `noResultsText`        | `String`    | `No matching results`  | `The message to be displayed when having no results on searching`                  |
| `noResultsRenderer`    | `Component` | `no_matching_items.js` | `Component to replace the default NoResults component. `        |
| `noResultsIconRenderer`| `Component` |                        | `Component to replace the default NoResultsIcon component.`     |
| `headerRenderer`       | `Component` | `header.js`            | `Component to replace the default Header component.`            |
| `backIconRenderer`     | `Component` |                       | `Component to replace the default BackIcon component. `          |
| `inputRenderer`        | `Component` | `input.js️`             | `Component to replace the default Input component. `            |
| `inputIconRenderer`    | `Component` |                        | `Component to replace the default InputIcon component. `        |
| `clearIconRenderer`    | `Component` |                        | `Component to replace the default CleaseIcon component. `       |
| `itemRenderer`         | `Component` | `item.js️`              | `Component to replace the default Item component. `             |
| `itemsRenderer`        | `Component` | `items.js`             | `Component to replace the default Items component. `            |
| `forwardIconRenderer`  | `Component` |                        | `Component to replace the default ForwardIcon component. `      |
| `treeContainerRenderer`| `Component` | `tree_container.js`    | `Component to replace the default TreeContainer component. `    |
| `markSelectedItem`     | `boolean`   | `false`                | `Toggle to mark selected item. `                                |

<br/>

## How to Contribute

#### Setting up development environment

1. Fork the repository and create your branch from `master`.
2. Install the project: `yarn install`
3. Run tests: `yarn test` or `yarn test:watch`
4. Run dev environment: `yarn storybook` and head to [https://localhost:6006](https://localhost:6006)

## Credit

Styling patterns were taken from react-select - [README](https://github.com/JedWatson/react-select/blob/master/README.md)
