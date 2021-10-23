import View from "./view";
export const state = {
  MetaData: {},
  TimeSeries5min: {},

  //ENDER HERE OBJECT !  AND OBJECT 2
};

export const apiCALL = async function () {
  //SENDING THE PROMISE
  try {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=5KL2KZKMG764VZZL"
    );
    const data = await response.json();

    console.log(data);
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
};
//Loading THE PROMISE
// export const loadStock = async function (data) {
//   let timeSeries5min = data["Time Series (5min)"];
//   return timeSeries5min;
//   // state.TimeSeries5min = {
//   //   open: TimeSeries5min.open,
//   //   high: TimeSeries5min.hign,
//   //   low: TimeSeries5min.low,
//   //   close: TimeSeries5min.close,
//   //   volume: TimeSeries5min.volume,
//   // };
//
