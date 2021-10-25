export default class View {
  parentElement = document.querySelector(".list");
  data;

  render(data) {
    this.data = data;
    console.log(this.data);
    const markup = this.generateMarkup(this.data);
    this.parentElement.innerHTML = "";
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup(timeSeries5min) {
    const maxNumber = Math.max(
      ...Object.values(timeSeries5min["Time Series (5min)"]).map(
        (l) => +l["2. high"]
      )
    );
    const minNumber = Math.min(
      ...Object.values(timeSeries5min["Time Series (5min)"]).map(
        (l) => +l["3. low"]
      )
    );
    console.log(minNumber);
    console.log(maxNumber);

    let emptyString = "";

    for (const [key, value] of Object.entries(
      timeSeries5min["Time Series (5min)"]
    )) {
      // const isLargeNumber = (value) =>
      //   value["2. high"] === maxNumber.IndexOf(maxNumber);
      // const isLowNumber = (value) =>
      //   value["3. low"] === minNumber.IndexOf(minNumber);

      // console.log(isLargeNumber(value));
      // console.log(isLowNumber(value));
      emptyString += ` 
    ${key}
    
      <ol class="center">
      
       <li>OPEN:  ${value["1. open"]}</li>
      <li ${
        +value["2. high"] === maxNumber ? 'class="maxNumber"' : ""
      }>HIGN:  ${value["2. high"]}</li>
      <li ${+value["3. low"] === minNumber ? 'class="minNumber"' : ""}>LOW:  ${
        value["3. low"]
      }</li>
      <li>CLOSE:  ${value["4. close"]}</li>
      <li>VOLUME:  ${value["5. volume"]}</li>
       </ol>`;
    }
    console.log(maxNumber);
    return emptyString;
  }
}
// const object = { a: 2, b: 4, c: 6, d: 8 };

// for (const [index, [key, value]] of Object.entries(Object.entries(object))) {
//   console.log(`${index}: ${key} = ${value}`);
// }

// Object.entries(object).forEach(([key, value], index) => {
//   console.log(`${index}: ${key} = ${value}`);
// });
