import { shallow } from "enzyme";
import React from "react";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe("<RealExampleRef />", () => {
  test("should the component render properly", () => {
    const wrapper = shallow(<RealExampleRef />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show the component <MultipleCustomHooks />", () => {
    const wrapper = shallow(<RealExampleRef />);

    wrapper.find("button").simulate("click");

    expect(
      wrapper.find("MultipleCustomHooks").exists()
    ).toBe(true);
  });
});
