import LgLink from "../src/link.vue";

export default {
  title: "LgLink",
  component: LgLink,
};

export const Link = (_) => ({
  components: { LgLink },
  template: `
    <div>
      <lg-link href="https://www.baidu.com">Baidu</lg-link>
    </div>
  `,
});
export const DisabledLink = (_) => ({
  components: { LgLink },
  template: `
    <div>
      <lg-link href="https://www.baidu.com" disabled>Baidu</lg-link>
    </div>
  `,
});
