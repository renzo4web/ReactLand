import { shallow } from "enzyme";
import FormTodo from "../../../components/08-useReducer/FormTodo";

describe("<FormTodo /> Test", () => {
  const addTodo = jest.fn();
  const wrapper = shallow(<FormTodo addTodo={addTodo} />);

  let formSubmit = wrapper.find("form").prop("onSubmit");

  test("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should NOT  call addTodo() ", () => {
    formSubmit({ preventDefault() {} });
    expect(addTodo).toHaveBeenCalledTimes(0);
  });

  test("should call addTodo when form is submited", () => {
    const value = "Learn React";
    wrapper.find("input.form-control").simulate("change", {
      target: {
        value,
      },
    });

    formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(addTodo).toHaveBeenCalled();
    expect(addTodo).toHaveBeenCalledWith({
      todo: value,
      completed: false,
      id: expect.any(Number),
    });
  });
});
