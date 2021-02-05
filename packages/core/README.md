# React Tree

React Tree is a straight forward component that allows a user to display and manage a hierarchical structure of items in a clear and comfortable way.

The basic tree is built using @emotion/core, and supports both styling and component renderers customizations.


Examples can be found - [here](https://github.com/kenshoo/react-tree/blob/master/packages/docs/stories/core.stories.js)

 
  <p align="center">
      <img src="demo.gif?raw=true" width="288" />
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

### Props
Can be found - [here](https://github.com/kenshoo/react-tree#props)
<br/>

### Customization

#### Styling

The basic tree gets "styles" object property.
<br/>
If the "styles" object is empty, the basic tree will use the default styles.
<br/>
The "styles" object can override any of the following:
 - container - tree container
 - header - tree header. Displays tree title or item's parents
 - headerBackIcon - back icon
 - item - a single item from the hierarchical tree.
 - highlight - the style of the searched (highlighted) letters of an item
 - searchItemInitial: the style of the basic ("not searched") letters of an item
 - parents - the style of parents sub-title on search
 - items - items list container
 - noResults - displayed when there are no found items
-  noResultsIcon - the icon displayed when there are no found items 
-  noResultsText - the massage displayed when there are no found items 
 - input - search input
-  searchInput - the icon of the search input
 - clearInput - the icon of the search input "clear" button
 - forwardIcon - the icon that is part of the item component. Displayed when the item has children. 
 - selectedItem - the style of the selectedItem item 
 - inputWrapper - the style of input wrapper

<br/>

#### Renderers

You can replace the renderers of the following components:

<br/>

**Container**

Use the `treeContainerRenderer` to replace the default component.

Each treeContainer receives the following props:

`containerRef` - Holds a reference to the tree container component

`children` - Holds all sub components (like header, input, items, etc..)

`getStyles` - Gets relevant styles

`styles` - Enables using customized styles

<br/>

**Header**

Use the `headerRenderer` to replace the default component.

Each header receives the following props:

`headerRef` - Holds a reference to the header component

`parents` - Holds the parents of the current level. 
<br/>
For example for the following structure: ["Profiles", "Performance", "Clicks"]
- In the first level the parents are: [""]
- In the second level the parents are: ["Profile"]
- In the third level the parents are: ["Profile, "Performance"]


`onClick` -  Triggers the back event on click

`title` - The title of the header. Displayed on the first level.

`getStyles` - Gets relevant styles

`styles` - Enables using customized styles

`backIconRenderer` - Use the `backIconRenderer` to replace the default back button component.

<br/>

**Input**

Use the `inputRenderer` to replace the default component.

Each header receives the following props:

`inputRef` - Holds a reference to the input component

`searchTerm` - Holds the searched value

`onInputChange` - Triggers set searchTerm event on change

`getStyles` - Gets relevant styles

`styles` - Enables using customized styles

`inputIconRenderer` - Use the `inputIconRenderer` to replace the default input icon component.

`clearIconRenderer` - Use the `clearIconRenderer` to replace the default clear input icon component.

<br/>

**Items**

Use the `itemsRenderer` to replace the default component.

Each header receives the following props:

`getStyles` - Gets relevant styles

`styles` - Enables using customized styles

`children` - All items

<br/>

**Item**

Use the `itemRenderer` to replace the default component

Each header receives the following props:

`getStyles` - Gets relevant styles

`styles` - Enables using customized styles

`searchTerm` - Holds the searched value

`item` - Represents an item from the given structure

`onClick` - Is called when clicking on an item

`forwardIconRenderer` - Use the `forwardIconRenderer` to replace the default forward icon component

`selectedItem` - Represents the current selected item. Is relevant when markSelectedItem = true

<br/>

**No Results**

Use the `noResultsRenderer` to replace the default component.

`getStyles` - Gets relevant styles

`styles` - Enables using customized styles

`text` - Displayed when there are no results

`noResultsIconRenderer` - Use the `noResultsIconRenderer` to replace the default no results warning icon component.
