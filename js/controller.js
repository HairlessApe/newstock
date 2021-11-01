import View from "./view";
import { apiCALL } from "./model";
let view;
export function whenClickButton() {
  apiCALL().then((data) => {
    view.render(data);
  });
}

window.onload = () => {
  view = new View();
  document

    .getElementById("myBtn")
    .addEventListener("click", function whenClickButton(event) {
      event.preventDefault();
      {
        const input = document.getElementById("Stockname").value;
        if (input !== "") {
          console.log(input);

          apiCALL(input).then((data) => {
            view.render(data);
          });
        }
      }
    });
  document.getElementById("checkWhy").addEventListener("click", function () {
    document.querySelector(".bg-model").style.display = "flex";
  });

  document.querySelector(".close").addEventListener("click", function () {
    // if ((document.querySelector(".bg-model").style.display = "flex"))
    document.querySelector(".bg-model").style.display = "none";
  });
};
