import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("GifGridItem test", () => {
  test("should render a gif", () => {
    const wrapper = shallow(<GifGridItem />);
  });
});
