import m from "mithril";
import "./main.css";

export const App = () => {
  return {
    view: () => {
      return m("h1", { class: "text-2xl font-semibold" }, "Mithril TS");
    },
  };
};
