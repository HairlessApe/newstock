import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

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

    const labels = Object.keys(timeSeries5min["Time Series (5min)"]).slice(
      0,
      5
    );

    const dataChart = {
      labels: labels,
      datasets: [
        {
          label: "Stock Graphics",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [
            Object.values(timeSeries5min["Time Series (5min)"]).map(
              (l) => +l["2. high"]
            ),
          ],
        },
      ],
    };
    const config = {
      type: "line",
      data: dataChart,
      options: {},
    };

    const ctx = document.getElementById("Mychart").getContext("2d");
    const Chart = require("chart.js");
    const stockChart = new Chart(ctx, {
      type: config.type,
      data: dataChart,
    });
    stockChart.render();
    console.log(stockChart);

    let emptyString = "";

    for (const [key, value] of Object.entries(
      timeSeries5min["Time Series (5min)"]
    )) {
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

    return emptyString;
  }
}
