import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test hook useFetchGifs", () => {
  test("should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("morty")
    );

    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toStrictEqual([]);
    expect(loading).toBe(true);
  });

  test("should return a array of img and loading false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("morty")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
