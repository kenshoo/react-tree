import { useEffect, useState } from "react";

const useTreeHeight = ({ ref }) => {
  const [treeHeight, setTreeHeight] = useState(0);

  useEffect(() => {
    ref.current && setTreeHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  return treeHeight;
};

export default useTreeHeight;
