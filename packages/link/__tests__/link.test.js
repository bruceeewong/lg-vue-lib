import { mount } from "@vue/test-utils";
import LgLink from "../src/link.vue";

describe("Lg-Link", () => {
  test("should render a tag", () => {
    const wrapper = mount(LgLink, {
      propsData: {
        href: "https://www.baidu.com",
      },
    });
    expect(wrapper.html()).toContain('a href="https://www.baidu.com"');
  });
});
