import "./food-box.scss";

function FoodBox({ foodImg, foodName, foodPrice, foodAvailable }) {
  return (
    <li className="food-box">
      <img
        className="food-box__img"
        src={foodImg}
        alt="there is a food-img"
        width="150"
        height="150"
      />
      <h3 className={foodName}>Sho'rva</h3>
      <p className={foodPrice}>$20</p>
      <p className={foodAvailable}>20 Bowls available</p>
    </li>
  );
}

export default FoodBox;
