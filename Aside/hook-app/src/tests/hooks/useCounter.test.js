import { useCounter } from "../../hooks/useCounter";
import {
  act,
  renderHook,
} from "@testing-library/react-hooks";

describe("test on useCounter", () => {
  let hook;
  let testArgument;
  beforeEach(() => {
    const { result } = renderHook(() => useCounter());
    hook = result;
    testArgument = 80;
  });

  test("should use Counter return a count, and three funtions", () => {
    const { state, increment, decrement, reset } =
      hook.current;
    expect(state).toBe(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should return the value that was passed as argument to useCounter", () => {
    const { result } = renderHook(() =>
      useCounter(testArgument)
    );

    const { state } = result.current;

    expect(state).toBe(testArgument);
  });

  test("should increment the testArgument by 1", () => {
    testArgument = 80;
    const { result } = renderHook(() =>
      useCounter(testArgument)
    );

    act(() => {
      result.current.increment();
    });

    expect(result.current.state).toBe(testArgument + 1);
  });
});
