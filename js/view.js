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

import zoomPlugin from "chartjs-plugin-zoom";
var scrolledUp = true;
export default class View {
  parentElement = document.querySelector(".list");
  data;
  chart;

  render(data) {
    this.data = data;
    console.log(this.data);
    const markup = this.generateMarkup(this.data);
    this.parentElement.innerHTML = "";
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup(timeSeries5min) {
    console.log(this.chart);
    if (this.chart) {
      this.chart.destroy();
    }
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

    const labels = Object.keys(timeSeries5min["Time Series (5min)"]);

    const dataChart = {
      labels: labels,
      datasets: [
        {
          label: "Stock Graphics",
          fill: false,
          tension: 0.1,
          backgroundColor: "rgb(255,255,255)",
          borderColor: "rgb(0,100,0)  ",
          data: Object.values(timeSeries5min["Time Series (5min)"]).map(
            (l) => +l["2. high"]
          ),
        },
      ],
    };
    const config = {
      type: "line",
      data: dataChart,
    };

    const ctx = document.getElementById("myChart").getContext("2d");
    const stockChart = new Chart(ctx, {
      type: config.type,
      data: dataChart,
      options: {
        plugins: {
          zoom: {
            pan: {
              //PAN OPTIONS or events
              enabled: true,
              mode: "xy",
              threshold: 10,
            },
            limits: {
              //AXIS LIMITS
            },
            zoom: {
              //ZOOM OPTIONS or events
              wheel: {
                enabled: true,
                speed: 0.03,
              },
            },
          },
        },
      },
    });

    Chart.register(zoomPlugin);

    stockChart.render();

    this.chart = stockChart;

    // const topPosition = document.getElementById("rightDiv");
    const chartPosition = document.getElementById("myChart");
    const mobileButton = document.getElementById("mobileButton");
    console.log(mobileButton);
    mobileButton.addEventListener("click", function Movesomewhere(event) {
      event.preventDefault();

      // const topPoz = topPosition.getBoundingClientRect();
      const chartPoz = chartPosition.getBoundingClientRect();

      if (!scrolledUp) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          // left: chartPoz.left + window.pageXOffset,
          top: chartPoz.top + window.pageYOffset,
          behavior: "smooth",
        });
      }

      if (scrolledUp) {
        scrolledUp = false;
        let parentElement = document.querySelector("#mobileButton");
        parentElement.innerHTML = "";

        parentElement.innerHTML += ` <i class="material-icons">arrow_upwards</i>`;
      } else {
        scrolledUp = true;
        let parentElement = document.querySelector("#mobileButton");
        parentElement.innerHTML = "";
        parentElement.innerHTML += ` <i class="material-icons">arrow_downwards</i>`;
      }
    });

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
