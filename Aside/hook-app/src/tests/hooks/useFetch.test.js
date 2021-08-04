import { renderHook } from "@testing-library/react-hooks";
import fetch from "node-fetch";

import { useFetch } from "../../hooks/useFetch";

describe("useFetch custom hook Test", () => {
  test("should return a object {data,loading,error}", () => {
    const url = `https://www.breakingbadapi.com/api/quotes/1`;
    const { result } = renderHook(() => useFetch(url));

    console.log(result.current);
  });
});
