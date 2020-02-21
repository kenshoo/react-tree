import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "../src";
import toJson from "enzyme-to-json";

describe("core component", () => {
  test("will render", () => {
    const cmp = shallow(<HelloWorld />);
    expect(toJson(cmp)).toMatchSnapshot();
  });
});
