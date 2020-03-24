import { css as treeCss } from "../treeStyle";
import {
  wrapperCss as headerWrapperCss,
  backIconCss as headerBackIconCss
} from "../header/headerStyle";
import { css as itemCss } from "../item/itemStyle";
import {
  highlightCss,
  initialCss as searchItemInitialCss,
  parentsCss
} from "../item/searched_item/searchedItemStyle";
import { css as itemsCss } from "../items/itemsStyle";
import {
  css as inputCss,
  searchIconCss as inputSearchIconCss,
  wrapperCss as inputWrapperCss
} from "../input/inputStyle";
import {
  css as noResultsCss,
  icon as noResultsIconCss,
  text as noResultsTextCss
} from "../no_results/noResultsStyle";

export const defaultStyles = {
  tree: treeCss,
  header: headerWrapperCss,
  headerBackIcon: headerBackIconCss,
  item: itemCss,
  highlight: highlightCss,
  searchItemInitial: searchItemInitialCss,
  parents: parentsCss,
  items: itemsCss,
  noResults: noResultsCss,
  noResultsIcon: noResultsIconCss,
  noResultsText: noResultsTextCss,
  input: inputCss,
  searchInput: inputSearchIconCss,
  inputWrapper: inputWrapperCss
};

export const mergeStyles = (source, target = {}) => {
  const styles = { ...source };

  Object.keys(target).forEach(key => {
    if (source[key]) {
      styles[key] = (rsCss, props) => {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });

  return styles;
};
