import React from "react";
import { shallow } from "enzyme";
import Tree from "../src";
import toJson from "enzyme-to-json";

describe("tree component", () => {
  test("default", () => {
    const cmp = shallow(<Tree />);
    expect(toJson(cmp)).toMatchSnapshot();
  });
});
