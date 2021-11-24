import { Route, Switch, useParams } from "react-router";
import "./home-content.scss";

import FoodBox from "../../../FoodBox/food-box";

// Data
import foods from "../../../../assets/data/foods";

function HomeContent() {
  return (
    <div className="home-content">
      <Switch>
        <Route path="/:foodtype" component={FoodList} />
        <Route path="/" component={FoodList} />
      </Switch>
    </div>
  );
}

function FoodList() {
  const { foodType } = useParams();
  console.log(foodType);
  return (
    <>
      {foods.length > 0 && (
        <ul className="food-list">
          {foods
            .filter(food => food.FoodType === foodType)
            .map(food => (
              <FoodBox
                foodImg={food.img}
                foodName={food.title}
                foodPrice={food.price}
                foodAvailable={food.available}
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default HomeContent;
