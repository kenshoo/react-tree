import {
  containsAllParents,
  filterBySearchTerm,
  buildLeafForItemRenderer,
  removeDuplicateLeafs
} from "../src/util";

describe("hierarchical select util", () => {
  test("containsAllParents - empty parent", () => {
    expect(containsAllParents(["a", "b"], [])).toBeTruthy();
  });

  test("containsAllParents - contains all two items", () => {
    expect(containsAllParents(["a", "b", "c"], ["a", "b"])).toBeTruthy();
  });

  test("containsAllParents - contains all two items exact", () => {
    expect(containsAllParents(["a", "b"], ["a", "b"])).toBeTruthy();
  });

  test("containsAllParents - contains all one item", () => {
    expect(containsAllParents(["a", "b"], ["a"])).toBeTruthy();
  });

  test("containsAllParents - contains all one item", () => {
    expect(containsAllParents(["a", "b"], ["c"])).toBeFalsy();
  });

  test("filterBySearchTerm - empty search term", () => {
    expect(filterBySearchTerm(["a"], "")).toBeTruthy();
  });

  test("filterBySearchTerm - both low case", () => {
    expect(filterBySearchTerm(["a"], "a")).toBeTruthy();
  });

  test("filterBySearchTerm - low and high case", () => {
    expect(filterBySearchTerm(["a"], "A")).toBeTruthy();
    expect(filterBySearchTerm(["A"], "a")).toBeTruthy();
  });

  test("filterBySearchTerm - two items", () => {
    expect(filterBySearchTerm(["a", "b"], "a")).toBeFalsy();
    expect(filterBySearchTerm(["a", "b"], "A")).toBeFalsy();
    expect(filterBySearchTerm(["a", "b"], "b")).toBeTruthy();
    expect(filterBySearchTerm(["a", "b"], "B")).toBeTruthy();
  });

  test("buildLeafForItemRenderer - root without search", () => {
    expect(buildLeafForItemRenderer(["a", "b", "c"], 0, "")).toEqual({
      item: ["a", "b", "c"],
      hasChild: true,
      currentDepth: 0,
      key: "a"
    });
  });

  test("buildLeafForItemRenderer - second depth without search", () => {
    expect(buildLeafForItemRenderer(["a", "b", "c"], 1, "")).toEqual({
      item: ["a", "b", "c"],
      hasChild: true,
      currentDepth: 1,
      key: "b"
    });
  });

  test("buildLeafForItemRenderer - last depth without search", () => {
    expect(buildLeafForItemRenderer(["a", "b", "c"], 2, "")).toEqual({
      item: ["a", "b", "c"],
      hasChild: false,
      currentDepth: 2,
      key: "c"
    });
  });

  test("buildLeafForItemRenderer - with search", () => {
    expect(
      buildLeafForItemRenderer(["profile", "performance", "clicks"], 0, "cli")
    ).toEqual({
      item: ["profile", "performance", "clicks"],
      hasChild: false,
      currentDepth: 0,
      key: "profile,performance,clicks"
    });
  });

  test("removeDuplicateLeafs - empty array", () => {
    expect(removeDuplicateLeafs([])).toEqual([]);
  });

  test("removeDuplicateLeafs - no duplicate array", () => {
    expect(
      removeDuplicateLeafs([{ key: "a" }, { key: "b" }, { key: "c" }])
    ).toEqual([{ key: "a" }, { key: "b" }, { key: "c" }]);
  });

  test("removeDuplicateLeafs - duplicate", () => {
    expect(
      removeDuplicateLeafs([{ key: "a" }, { key: "a" }, { key: "c" }])
    ).toEqual([{ key: "a" }, { key: "c" }]);
  });
});
