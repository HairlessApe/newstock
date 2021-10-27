import View from "./view";
import { apiCALL } from "./model";

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
        if (input !== "") {
          console.log(input);

          apiCALL(input).then((data) => {
            const view = new View();
            view.render(data);
          });
        }
      }
    });
