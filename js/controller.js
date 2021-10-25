import View from "./view";
import { apiCALL } from "./model";
// const stockContainer = document.querySelector(".list").append(markup);

// let form = document.getElementById("Stock name");
// form.addEventListener("submit", function whenClickButton(event) {
//   event.preventDefault();
// });let  form = document.getElementById("Stock name");
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
      {
        const input = document.getElementById("Stockname").value;
        if (input != "") {
          console.log(input);

          apiCALL(input).then((data) => {
            const view = new View();
            view.render(data);
          });
        }
      }
      console.log("muie");
    });
