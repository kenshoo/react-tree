# React Tree

[![Build Status](https://travis-ci.org/kenshoo/react-tree.svg?branch=master)](https://travis-ci.org/kenshoo/react-tree)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7b44acc9042c5ee410a8/test_coverage)](https://codeclimate.com/github/kenshoo/react-tree/test_coverage)

React Tree is a straight forward component that allows a user to display and manage a hierarchical structure of items in a clear and comfortable way.

 ## Optional Themes
 
Two optional themes are supported when using React Tree:
 #### Basic tree
 Includes all the logic, based on @emotion/core -
 <br/>
 https://github.com/kenshoo/react-tree/blob/master/packages/core/README.md

  <p align="center">
      <img src="core-tree-demo.gif?raw=true" width="288" />
  </p>
  
 #### Material tree 
 Based on the basic tree logic, using Material-UI components - 
 <br/>
 https://github.com/kenshoo/react-tree/blob/master/packages/material_tree/README.md

  <p align="center">
      <img src="react-tree-demo.gif?raw=true" width="288" />
  </p>

Both options support component customization.

Examples - https://github.com/kenshoo/react-tree/blob/master/packages/docs/stories/core.stories.js

## How to Contribute

#### Setting up development environment

1. Fork the repository and create your branch from `master`.
2. Install the project: `yarn install`
3. Run tests: `yarn test` or `yarn test:watch`
4. Run dev environment: `yarn storybook` and head to [https://localhost:6006](https://localhost:6006)

## Credit

Styling patterns were taken from react-select - https://github.com/JedWatson/react-select/blob/master/README.md
