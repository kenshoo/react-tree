import { useRef } from "react";

const useComponentsRefs = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const inputRef = useRef();

  const itemsHeight =
    (containerRef?.current?.clientHeight || 0) -
    (headerRef?.current?.clientHeight || 0) -
    (inputRef?.current?.clientHeight || 0);

  return { containerRef, headerRef, inputRef, itemsHeight };
};

export default useComponentsRefs;
