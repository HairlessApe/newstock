import View from "./view";
import { apiCALL } from "./model";
// const stockContainer = document.querySelector(".list").append(markup);

export function whenClickButton() {
  apiCALL().then((data) => {
    const view = new View();
    view.render(data);
  });
}

window.onload = () =>
  document
    .getElementById("myBtn")
    .addEventListener("click", function whenClickButton(event) {
      event.preventDefault();
      apiCALL().then((data) => {
        const view = new View();
        view.render(data);
      });
      console.log("muie");
    });
