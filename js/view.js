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
    let emptyString = "";

    for (const [key, value] of Object.entries(
      timeSeries5min["Time Series (5min)"]
    )) {
      console.log("key", key);
      console.log("value", value);
      emptyString += ` 
      
    ${key}
      <ol>
      
       <li>OPEN:  ${value["1. open"]}</li>
      <li>HIGN:  ${value["2. high"]}</li>
      <li>LOW:  ${value["3. low"]}</li>
      <li>CLOSE:  ${value["4. close"]}</li>
      <li>VOLUME:  ${value["5. volume"]}</li>
       </ol>`;
    }
    return emptyString;
  }
}
// key is the date or DATA and value is open high so on
