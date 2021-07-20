import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("test input.value state should change", () => {
    let input = wrapper.find("input");
    input.simulate("change", { target: { value: "test" } });

    input = wrapper.find("input");
    const { value } = input.props();
    expect(value).toBe("test");
  });

  test("should not submit a form when input is empty", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should form be submited and clear input text", () => {
    let input = wrapper.find("input");
    input.simulate("change", { target: { value: "test" } });

    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    const value = wrapper.find("input").prop("value");

    expect(setCategories).toHaveBeenCalled();
    expect(value).toBe("");
  });
});
