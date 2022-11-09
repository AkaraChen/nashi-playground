import "./style.css";
import typescriptLogo from "./typescript.svg";
import nashi from "@akrc/nashi";
import { setupCounter } from "./counter";

const app = nashi.fromHTML(`<div id="app">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/akarachen/nashi" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + Nashi</h1>
    <p class="read-the-docs">
      Click on the Vite and Nashi logos to learn more
    </p>
  </div>`);

nashi("body").firstChild(app);
const card = nashi.create("div").class("card");
const counter = nashi.create("button").id("counter").attr("type", "button");
setupCounter(counter);
card.append(counter);
nashi("h1").after(card);
