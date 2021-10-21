"strict";
import { state } from "./model";
import { markup } from "./view";
import { TimeSeries5min } from "./model";
import view from "./view";
import { loadStock } from "./model";
import { apiCALL } from "./model";

const stockContainer = document.querySelector(".list").append(markup);
loadStock();
apiCALL();
generateMarkup();
