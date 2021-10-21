import TimeSeries5min from "./model";

export default class View {
  #parentElement = document.querySelector(".list");
  #data;

  render(data) {
    this.#data = data;
    const markup = this.generateMarkup()
    if (!render) return markup
    Stockcontainer.innerHTML = ''
    Stockcontainer.insertAdjacentHTML('afterbegin', markup)

  }

  generateMarkup() {
      
     return`  <ol>
        <li> Open:${TimeSeries5min.open}</li>
        <li>High:${TimeSeries5min.high}</li>
        <li>Low:${TimeSeries5min.low}</li>
        <li>Close:${TimeSeries5min.close}<li>
        <li>Volume:${TimeSeries5min.volume}<li>
         </ol>`;
         
  }
  

}

export default new View();

//USE FOR IN LOOP ON THE RENDER//


// render(data, render = true) {
//     if (!data || (Array.isArray(data) && data.length === 0))
//       return this.renderError();

//     this._data = data;
//     const markup = this._generateMarkup();

//     if (!render) return markup;

//     this._clear();
//     this._parentElement.insertAdjacentHTML('afterbegin', markup);
//   }