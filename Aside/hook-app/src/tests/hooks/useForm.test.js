import {
  act,
  renderHook,
} from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("useForm Tests", () => {
  let initialForm;

  beforeEach(() => {
    initialForm = {
      name: "Mr Example",
      email: "example@gmail.com",
    };
  });

  test("should return a empty object", () => {
    const { result } = renderHook(useForm);

    expect(typeof result.current[0]).toBe("object");
  });

  test("should change the value of name", () => {
    const { result } = renderHook(() =>
      useForm(initialForm)
    );

    let [inputs, handleChange] = result.current;

    act(() => {
      const target = { name: "name", value: "Mr Test" };
      handleChange({ target });
    });

    [inputs, handleChange] = result.current;
    expect(inputs["name"]).toBe("Mr Test");
  });

  test("should reset the form to initials values", () => {
    const { result } = renderHook(() =>
      useForm(initialForm)
    );

    let [inputs, handleChange, reset] = result.current;

    act(() => {
      const target = { name: "name", value: "Mr Test" };
      handleChange({ target });
      reset();
    });

    [inputs, handleChange] = result.current;
    expect(inputs).toStrictEqual(initialForm);
  });
});
