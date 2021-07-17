import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifExpertApp from "../GifExpertApp";

describe("Test main <GifExpertApp />", () => {
  test("should render the component ", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should  display a list of categories", () => {
    const categories = ["rick", "morty"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
