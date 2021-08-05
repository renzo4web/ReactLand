import { shallow } from "enzyme";
import HomeScreen from "../../../components/09-useContext/HomeScreen";

describe("<HomeScreen /> Test", () => {
  const wrapper = shallow(<HomeScreen />);

  test("should ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
