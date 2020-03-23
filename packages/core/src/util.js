export const containsAllParents = (leaf, parents) => {
  if (parents.length === 0) {
    return true;
  }
  let containsAll = true;
  parents.forEach((parent, index) => {
    if (parent !== leaf[index]) {
      containsAll = false;
    }
  });
  return containsAll;
};

export const filterBySearchTerm = (leaf, searchTerm) => {
  return (
    searchTerm === "" ||
    leaf[leaf.length - 1].toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const buildLeafForItemRenderer = (leaf, currentDepth, searchTerm) => {
  return {
    item: leaf,
    hasChild: leaf.length - 1 > currentDepth && searchTerm === "",
    currentDepth,
    key: searchTerm === "" ? leaf[currentDepth] : leaf.slice().toString()
  };
};

export const removeDuplicateLeafs = leaves => {
  return leaves.filter(
    (item, index) => leaves.findIndex(leaf => leaf.key === item.key) === index
  );
};
