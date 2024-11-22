import m from "mithril";
import { App } from "./App";

const mountNode = document.getElementById("app");

if (mountNode) {
  m.mount(mountNode, App);
}
