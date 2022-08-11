import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RatingsList, { Rating, AverageRating } from "./App";

import ratings from "./data";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let { name, rate, content } = ratings[ratings.length - 1];

root.render(
  <StrictMode>
    <h4>Rating:</h4>
    <Rating name={name} rate={rate} content={content} />
    <h4>AverageRating:</h4>
    <AverageRating ratings={4.0} />
    <h4>RatingsList:</h4>
    <RatingsList ratings={ratings} />
  </StrictMode>
);
