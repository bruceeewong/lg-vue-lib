import Input from "../src/input";
import { mount } from "@vue/test-utils";

describe("lg-input", () => {
  test("input text", () => {
    const wrapper = mount(Input);
    expect(wrapper.html()).toContain('input type="text"');
  });
  test("input password", () => {
    const wrapper = mount(Input, {
      propsData: {
        type: "password",
      },
    });
    expect(wrapper.html()).toContain('input type="password"');
  });
  test("input value", () => {
    const wrapper = mount(Input, {
      propsData: {
        value: "admin",
      },
    });
    expect(wrapper.props("value")).toEqual("admin");
  });
  test("input snapshot", () => {
    const wrapper = mount(Input);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
