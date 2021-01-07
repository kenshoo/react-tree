# React Tree

[![Build Status](https://travis-ci.org/kenshoo/react-tree.svg?branch=master)](https://travis-ci.org/kenshoo/react-tree)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7b44acc9042c5ee410a8/test_coverage)](https://codeclimate.com/github/kenshoo/react-tree/test_coverage)

React tree is a straight forward component that allows a user to display and manage hierarchical structure of items in a clear and comfortable way.

 ## Styling options
 
Two styling options are supported when using react tree:
- Basic tree - using @emotion/core. 
- Material tree - based on the basic tree logic but using Material-UI components.

Both options support components customization.

 ## Basic tree
 
  <p align="center">
      <img src="core-tree-demo.gif?raw=true" width="400" />
  </p>
  
  ### Installation
  
   **Installation using npm:**
  ```
   npm install @kenshooui/react-tree --save
  ```
 **Installation using Yarn:**

```
 yarn add @kenshooui/react-tree
```

 ### How to use
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

 ## Material tree
 
  <p align="center">
      <img src="react-tree-demo.gif?raw=true" width="400" />
  </p>
  
  ### Installation
  
   **Installation using npm:**
  ```
   npm install @kenshooui/material-tree --save
  ```
 **Installation using Yarn:**

```
 yarn add @kenshooui/material-tree
```

 ### How to use
 <!-- example -->

```jsx
import MaterialTree from "@kenshooui/material-tree";

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

<MaterialTree
  structure={structure}
  title={"Add filter criteria"}
  onSelect={() => {}}
/>;
```

### Props

| Name                   | Type        | Default                | Description                                                     |
| :------------------    | :---------- | :--------------------- | :-------------------------------------------------------------- |
| `structure`            | `Array`     | `[]`                   | `Component input - array of leaves along with their ancestors`  |
| `title`                | `String`    | `""`                   | `Title to be displayed on root mode`                            |
| `onSelect`             | `Func`      | `() => {}`             | `callback when clicking a leaf`                                 |
| `styles`               | `Object`    |                        | `Optional - enables customized styles`                          |
| `width`                | `number`    | `230 `                 | `The width of the tree component`                               |
| `height`               | `number`    | `300 `                 | `The height of the tree component`                              |
| `noResultsText`        | `String`    | `No matching results`  | `The message the is displayed when having no results on searching`                  |
| `noResultsRenderer`    | `Component` | `no_matching_items.js` | `Component to replace the default NoResults component. Renders when having no results on searching`                  |
| `noResultsIconRenderer`| `Component` |                        | `Component to replace the default NoResultsIcon component.`     |
| `headerRenderer`       | `Component` | `header.js`            | `Component to replace the default Header component.`            |
| `backIconRenderer`     | `Component` |                       | `Component to replace the default BackIcon component. `         |
| `inputRenderer`        | `Component` | `input.js️`             | `Component to replace the default Input component. `            |
| `inputIconRenderer`    | `Component` |                        | `Component to replace the default InputIcon component. `        |
| `clearIconRenderer`    | `Component` |                        | `Component to replace the default CleaseIcon component. `       |
| `itemRenderer`         | `Component` | `item.js️`              | `Component to replace the default Item component. `             |
| `itemsRenderer`        | `Component` | `items.js`             | `Component to replace the default Items component. `            |
| `forwardIconRenderer`  | `Component` |                        | `Component to replace the default ForwardIcon component. `      |
| `treeContainerRenderer`| `Component` | `tree_container.js`    | `Component to replace the default TreeContainer component. `    |
| `markSelectedItem`     | `boolean`   | `false`                | `Toggle to mark selected item. `                                |

<br/>

### Customization

#### Styling

Customized styling can be applied on the basic tree.
<br/>
The basic tree gets "styles" object property.
<br/>
If the "styles" object is empty, the basic tree will use the default styles.
<br/>
The "styles" object can override any of the following:
 - container - tree container
 - header
 - headerBackIcon
 - item
 - highlight - the style of the search (highlighted) letters on search
 - searchItemInitial: the style of the not search letters on search
 - parents - the style of parents sub-title on search
 - items
 - noResults
-  noResultsIcon
-  noResultsText
 - input
-  searchInput
 - clearInput - the style of the "clear" button
 - forwardIcon
 - selectedItem
 - inputWrapper

<br/>

#### Renderers

You can replace the renderers of the following components:

<br/>

**Container**

Use the `treeContainerRenderer` to replace the default component.

Each treeContainer receives the following props:

`containerRef` - Holds a reference to the tree container component

`getStyles` - Gets relevant styles

<br/>

**Header**

Use the `headerRenderer` to replace the default component.

Each header receives the following props:

`headerRef` - Holds a reference to the header component

`parents` - Holds the parents of the current depth. 
<br/>
For example for the following structure: ["Profiles", "Performance", "Clicks"]
- In the first depth the parents are: [""]
- In the second depth the parents are: ["Profile"]
- In the third depth the parents are: ["Profile, "Performance"]


`onClick` -  Triggers the back event on click

`title` - The title of the header. Displayed on the first depth.

`getStyles` - Gets relevant styles

`backIconRenderer` - Use the `backIconRenderer` to replace the default back button component.

<br/>

**Input**

Use the `inputRenderer` to replace the default component.

Each header receives the following props:

`inputRef` - Holds a reference to the input component

`searchTerm` - Holds the searched value

`onInputChange` - Triggers set searchTerm event on change

`getStyles` - Gets relevant styles

`inputIconRenderer` - Use the `inputIconRenderer` to replace the default input icon component.

`clearIconRenderer` - Use the `clearIconRenderer` to replace the default clear input icon component.

<br/>

**Items**

Use the `itemsRenderer` to replace the default component.

Each header receives the following props:

`getStyles` - Gets relevant styles

<br/>

**Item**

Use the `itemRenderer` to replace the default component.

Each header receives the following props:

`getStyles` - Gets relevant styles

`searchTerm` - Holds the searched value

`item` - Represents an item from the given structure. 

`onClick` - Is called when clicking on an item

`forwardIconRenderer` - Use the `forwardIconRenderer` to replace the default forward icon component.

`selectedItem` - Represents the current selected item. Is relevant when markSelectedItem = true.

<br/>

**No Results**

Use the `noResultsRenderer` to replace the default component.

`getStyles` - Gets relevant styles

`text` - Displayed when there are no results

`noResultsIconRenderer` - Use the `noResultsIconRenderer` to replace the default no results warning icon component.


## How to Contribute

#### Setting up development environment

1. Fork the repository and create your branch from `master`.
2. Install the project: `yarn install`
3. Run tests: `yarn test` or `yarn test:watch`
4. Run dev environment: `yarn storybook` and head to [https://localhost:6006](https://localhost:6006)

## Credit

Styling patterns were taken from react-select - https://github.com/JedWatson/react-select/blob/master/README.md
