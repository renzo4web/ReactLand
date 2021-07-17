import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("GifGridItem test", () => {
  const url = "https://www.example.com";
  const title = "title";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("should render a gif", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should img have the attr from src=url alt=title", () => {
    const { alt, src } = wrapper.find("img").props();
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });
});
