import { shallow } from "enzyme";
import React from "react";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");

describe("<MultipleCustomHooks /> test", () => {
  test("should render properly ", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should  render the information", () => {
    useFetch.mockReturnValue({
      text: {
        series: "Breaking Bad",
        quote: "",
        author: "gol",
      },
      loading: false,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find("h4").text().trim()).toBe(
      "Breaking Bad"
    );
  });
});
