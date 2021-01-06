import { useRef } from "react";

const useComponentsRefs = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const inputRef = useRef();

  const itemsHeight =
    containerRef?.current?.clientHeight -
    headerRef?.current?.clientHeight -
    inputRef?.current?.clientHeight;

  return { containerRef, headerRef, inputRef, itemsHeight };
};

export default useComponentsRefs;
