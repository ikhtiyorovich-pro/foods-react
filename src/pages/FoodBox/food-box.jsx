import "./food-box.scss";

function FoodBox({ foodImg, foodName, foodPrice, foodAvailable, onClick }) {
  return (
    <li onClick={onClick} className="food-box">
      <img
        className="food-box__img"
        src={foodImg}
        alt="there is a food-img"
        width="150"
        height="150"
      />
      <h3>{foodName}</h3>
      <p>${foodPrice}</p>
      <p>{foodAvailable} Bowls available</p>
    </li>
  );
}

export default FoodBox;
