# Material Tree

Material Tree is an enrichment to React Tree component. 

It is based on basic React Tree logic and allows 
a user to display and manage a hierarchical structure of items using <b>Material-UI</b> components.

 
  <p align="center">
      <img src="react-tree-demo.gif?raw=true" width="400" />
  </p>
  
  ### Installation
  Since Material Rree is based on <b>React Tree</b> logic, you need to install both react-tree and material-tree.
  
  In addition, dependencies to <b>material-ui icons and core components</b> are needed if they don't exist in your project.
  
   **Installation using npm:**
  ```
   npm install @kenshooui/material-tree --save

   npm install @kenshooui/react-tree --save

   npm install @material-ui/core --save

   npm install @material-ui/icons --save
  ```
 **Installation using Yarn:**

```
 yarn add @kenshooui/material-tree

 yarn add @kenshooui/react-tree

 yarn add @material-ui/core

 yarn add @material-ui/icons
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
| `noResultsRenderer`    | `Component` | `no_results.js`        | `Component to replace the default NoResults component. Renders when having no results on searching`                  |
| `noResultsIconRenderer`| `Component` | `Warning icon`         | `Component to replace the default NoResultsIcon component.`     |
| `headerRenderer`       | `Component` | `header.js`            | `Component to replace the default Header component.`            |
| `backIconRenderer`     | `Component` | `ChevronLeft icon`     | `Component to replace the default BackIcon component. `         |
| `inputRenderer`        | `Component` | `input.js️`             | `Component to replace the default Input component. `            |
| `inputIconRenderer`    | `Component` | `Search icon`          | `Component to replace the default InputIcon component. `        |
| `clearIconRenderer`    | `Component` | `Clear icon`           | `Component to replace the default CleaseIcon component. `       |
| `itemRenderer`         | `Component` | `item.js️`              | `Component to replace the default Item component. `             |
| `itemsRenderer`        | `Component` | `items.js`             | `Component to replace the default Items component. `            |
| `forwardIconRenderer`  | `Component` | `ChevronRight icon`    | `Component to replace the default ForwardIcon component. `      |
| `treeContainerRenderer`| `Component` | `tree_container.js`    | `Component to replace the default TreeContainer component. `    |
| `markSelectedItem`     | `boolean`   | `false`                | `Toggle to mark selected item. `                                |

<br/>

### Customization

#### Renderers

You can replace the renderers of the following components:

<br/>

**Container**

Use the `treeContainerRenderer` to replace the default component.

Each treeContainer receives the following props:

`containerRef` - Holds a reference to the tree container component

`children` - Holds all sub components (like header, input, items, etc..)

`width` - The width of the tree component

`height` - The height of the tree component

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

`backIconRenderer` - Use the `backIconRenderer` to replace the default back button component.

<br/>

**Input**

Use the `inputRenderer` to replace the default component.

Each header receives the following props:

`inputRef` - Holds a reference to the input component

`searchTerm` - Holds the searched value

`onInputChange` - Triggers set searchTerm event on change

`inputIconRenderer` - Use the `inputIconRenderer` to replace the default input icon component.

`clearIconRenderer` - Use the `clearIconRenderer` to replace the default clear input icon component.

<br/>

**Items**

Use the `itemsRenderer` to replace the default component.

Each header receives the following props:

`children` - All items

`height` - The height of the items list

<br/>

**Item**

Use the `itemRenderer` to replace the default component.

Each header receives the following props:

`searchTerm` - Holds the searched value

`item` - Represents an item from the given structure. 

`onClick` - Is called when clicking on an item

`forwardIconRenderer` - Use the `forwardIconRenderer` to replace the default forward icon component.

`selectedItem` - Represents the current selected item. Is relevant when markSelectedItem = true.

<br/>

**No Results**

Use the `noResultsRenderer` to replace the default component.

`text` - Displayed when there are no results

`height` - The height of the items list

`noResultsIconRenderer` - Use the `noResultsIconRenderer` to replace the default no results warning icon component.


## How to Contribute

#### Setting up development environment

1. Fork the repository and create your branch from `master`.
2. Install the project: `yarn install`
3. Run tests: `yarn test` or `yarn test:watch`
4. Run dev environment: `yarn storybook` and head to [https://localhost:6006](https://localhost:6006)
