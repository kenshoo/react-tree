import {
  containsAllParents,
  filterBySearchTerm,
  buildLeafForItemRenderer,
  removeDuplicateLeafs
} from "../util";
import { useState, useEffect } from "react";

const useLeavesManager = ({ structure, parents, currentDepth }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const leaves = structure
      .filter(
        leaf =>
          filterBySearchTerm(leaf, searchTerm) &&
          containsAllParents(leaf, parents)
      )
      .map(leaf => buildLeafForItemRenderer(leaf, currentDepth, searchTerm));

    setLeaves(removeDuplicateLeafs(leaves));
  }, [searchTerm, parents, currentDepth]);

  return { searchTerm, setSearchTerm, leaves };
};

export default useLeavesManager;
