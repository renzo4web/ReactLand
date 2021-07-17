import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test hook useFetchGifs", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("morty"));
    const { data, loading } = result.current;
    console.log(loading, data);
    expect(data).toStrictEqual([]);
    expect(loading).toBe(true);
  });
});
