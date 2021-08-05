import { shallow } from "enzyme";
import "jest";
import React from "react";
import ListTodos from "../../../components/08-useReducer/ListTodos";
import { demoTodos } from "../../fixtures/demoTodos";

describe("<TodoList /> Tests", () => {
  const onRemove = jest.fn();
  const onCompleted = jest.fn();

  const wrapper = shallow(
    <ListTodos
      todos={demoTodos}
      onRemove={onRemove}
      onCompleted={onCompleted}
    />
  );
  test("should render properly ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render the todos received", () => {
    expect(wrapper.find("TodoListItem").length).toBe(
      demoTodos.length
    );

    expect(
      wrapper.find("TodoListItem").at(0).prop("onRemove")
    ).toEqual(expect.any(Function));
  });
});
