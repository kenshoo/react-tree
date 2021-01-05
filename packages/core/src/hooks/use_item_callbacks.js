import { useState } from "react";

const useItemCallbacks = onSelect => {
  const [currentDepth, setCurrentDepth] = useState(0);
  const [parents, setParents] = useState([]);

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

  return {
    onClick,
    onBackClick,
    currentDepth,
    setCurrentDepth,
    parents,
    setParents
  };
};

export default useItemCallbacks;
