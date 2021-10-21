export const state = {
  TimeSeries5min: {},
  //ENDER HERE OBJECT !  AND OBJECT 2
};

export const apiCALL = async function () {
  let data;

  //SENDING THE PROMISE
  try {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=5KL2KZKMG764VZZL"
    );
    if (!response.ok) throw new Error(`${data.message} ${response.status}`);
    console.log(data, response);
    const storeStockData = function (stock) {
      fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=5KL2KZKMG764VZZL`
      ).then(function (response) {
        console.log(response);
        response.json();
        // model.loadStock(stock);
      });
    };
    storeStockData("TSLA");

    console.log(markup);
  } catch (err) {
    alert(err);
  }
};
//Loading THE PROMISE
export const loadStock = async function () {
  const response = await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=5KL2KZKMG764VZZL"
  );
  data = await response.json();
  if (!response.ok) throw new Error(`${data.message} ${response.status}`);
  let TimeSeries5min = data["Time Series (5min)"];
  state.TimeSeries5min = {
    open: TimeSeries5min.open,
    high: TimeSeries5min.hign,
    low: TimeSeries5min.low,
    close: TimeSeries5min.close,
    volume: TimeSeries5min.volume,
  };
};
