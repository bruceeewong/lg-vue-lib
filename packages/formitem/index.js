import FormItem from "./src/formitem";

FormItem.install = (Vue) => {
  Vue.component(FormItem.name, FormItem);
};

export default FormItem;
