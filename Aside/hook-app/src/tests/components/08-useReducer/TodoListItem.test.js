import { shallow } from "enzyme";
import React from "react";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("<TodoListItem /> tests", () => {
  const onRemove = jest.fn();
  const onCompleted = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      item={demoTodos[0]}
      onRemove={onRemove}
      onCompleted={onCompleted}
      k="44523"
    />
  );

  test("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call the fn onRemove", () => {
    wrapper.find(".btn.badge.bg-danger").simulate("click");

    expect(onRemove).toHaveBeenCalled();
    expect(onRemove).toHaveBeenCalledWith(
      demoTodos[0].todo
    );
  });

  test("should call the fn onCompleted", () => {
    wrapper.find(".btn.badge.bg-success").simulate("click");

    expect(onCompleted).toHaveBeenCalled();
    expect(onCompleted).toHaveBeenCalledWith(
      demoTodos[0].id
    );
  });

  test("should render the text showing the todo", () => {
    expect(wrapper.find(".fw-bold").text().trim()).toBe(
      demoTodos[0].todo
    );
  });
});
