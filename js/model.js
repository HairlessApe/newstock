import View from "./view";
import { whenClickButton } from "./controller";
export const state = {
  MetaData: {},
  ObiectuTimes: {},
};
export const apiCALL = async function (input) {
  //SENDING THE PROMISE
  try {
    const response = await fetch(
      `      https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${input}&interval=5min&apikey=5KL2KZKMG764VZZL
`
    );
    const data = await response.json();

    console.log(data);
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
};
