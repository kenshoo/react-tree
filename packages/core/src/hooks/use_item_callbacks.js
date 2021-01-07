import { useState } from "react";

const useItemCallbacks = ({ onSelect, markSelectedItem }) => {
  const [currentDepth, setCurrentDepth] = useState(0);
  const [parents, setParents] = useState([]);
  const [selectedItem, setSelectedItem] = useState({ item: [], leaf: "" });

  const onClick = (label, item, hasChild) => {
    if (hasChild) {
      setParents(parents.concat(label));
      setCurrentDepth(currentDepth + 1);
    } else {
      markSelectedItem &&
        setSelectedItem({ item, leaf: item[item.length - 1] });
      onSelect(item);
    }
  };

  const onBackClick = () => {
    setParents(parents.filter((parent, index) => index < parents.length - 1));
    setCurrentDepth(currentDepth - 1);
  };

  return {
    onClick,
    onBackClick,
    currentDepth,
    setCurrentDepth,
    parents,
    setParents,
    selectedItem
  };
};

export default useItemCallbacks;
