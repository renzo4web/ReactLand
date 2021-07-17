//import React from "react";
//import { shallow } from "enzyme";
import getGifs from "../../helpers/getGifs";

describe("getGifs test file", () => {
  test("should getGifs fetch receibe a single aurgument must return 10 elements", async () => {
    const elements = await getGifs("morty");

    expect(elements.length).toBe(10);
  });
});
