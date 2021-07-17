import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test <GifGrid />", () => {
  const category = "morty";
  let wrapper = null;
  let gifs = [];
  beforeEach(() => {
    jest.clearAllMocks();
    gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier Cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier Cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    wrapper = shallow(<GifGrid category={category} />);
  });

  test("should <GifGrid /> receibe a category", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should display items from useFetchGifs", () => {
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
