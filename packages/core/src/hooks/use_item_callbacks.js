const useItemCallbacks = ({
  parents,
  setParents,
  currentDepth,
  setCurrentDepth,
  onSelect
}) => {
  const onClick = (label, item, hasChild) => {
    if (hasChild) {
      setParents(parents.concat(label));
      setCurrentDepth(currentDepth + 1);
    } else {
      onSelect(item);
    }
  };

  const onBackClick = () => {
    setParents(parents.filter((parent, index) => index < parents.length - 1));
    setCurrentDepth(currentDepth - 1);
  };

  return [onClick, onBackClick];
};

export default useItemCallbacks;
