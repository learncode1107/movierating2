import "./styles.css";
import { useState, useEffect } from "react";

/**
 *  singleRatingComponent
 * @param {*} param0
 * @returns
 */
const Rating = ({ name, rate, content }) => {
  const [star, setStart] = useState([
    "rating-start-k",
    "rating-start-k",
    "rating-start-k",
    "rating-start-k",
    "rating-start-k"
  ]);

  useEffect(() => {
    let newStar = star.map((item) => {
      --rate;
      return rate >= 0 ? "rating-start-f" : "rating-start-k";
    });

    setStart(newStar);
  }, []);

  const stars = star.map((item, index) => (
    <span key={index} className={item}></span>
  ));

  return (
    <div className="ratings-container">
      <h3>{name}</h3>
      {stars}
      <p>{content}</p>
    </div>
  );
};

/**
 *  averageComponent
 * @param {*} param0
 * @returns
 */
const AverageRating = ({ ratings }) => {
  const [star, setStart] = useState([
    "rating-start-k",
    "rating-start-k",
    "rating-start-k",
    "rating-start-k",
    "rating-start-k"
  ]);

  useEffect(() => {
    let rate = Math.ceil(ratings);
    let newStar = star.map((item) => {
      --rate;
      return rate >= 0 ? "rating-start-f" : "rating-start-k"; //两次三目运算
    });

    setStart(newStar);
  }, []);

  const stars = star.map((item, index) => (
    <span key={index} className={item}></span>
  ));

  return <div className="ratings-container-average">{stars}</div>;
};

/**
 *  ratingListComponent
 * @param {*} param0
 * @returns
 */

const RatingsList = ({ ratings }) => {
  // display all the data
  const singleRating = ratings.map((item, index) => (
    <Rating name={item.name} rate={item.rate} content={item.content}></Rating>
  ));

  // calculate the average
  let rateSum = ratings.reduce((sumData, item) => {
    return sumData + item.rate;
  }, 0);
  let averageRate = Math.ceil(rateSum / ratings.length);

  return (
    <div className="ratings">
      <AverageRating ratings={averageRate}></AverageRating>
      <AverageRating ratings={averageRate}></AverageRating>
      {singleRating}
    </div>
  );
};

export { Rating, AverageRating };

export default RatingsList;
