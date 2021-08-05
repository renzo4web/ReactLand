import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";

describe("<TodoApp /> Test", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();

  test("should render properly", () => {
    const wrapper = mount(<TodoApp />);
  });
});
