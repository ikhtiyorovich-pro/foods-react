import "./home-content.scss";
import { Route, Switch, useParams } from "react-router";
import { useContext } from "react";

import FoodBox from "../../../FoodBox/food-box";
import { Content } from "../../../../content/orderFoods";
// Data
import foods from "../../../../assets/data/foods";

function HomeContent() {
  return (
    <div className="home-content">
      <Switch>
        <Route path="/:FoodType" component={FoodList} />
      </Switch>
    </div>
  );
}

function FoodList() {
  const { FoodType } = useParams();
  const { orderFoods, setOrderFoods } = useContext(Content);
  console.log(orderFoods);
  return (
    <>
      {foods.length > 0 && (
        <ul className="food-list">
          {foods
            .filter(food => {
              if (FoodType) {
                return food.foodType === FoodType;
              }
              return food.foodType === "hot-dishes";
            })
            .map(food => (
              <FoodBox
                key={food.id}
                foodImg={food.img}
                foodName={food.title}
                foodPrice={food.price}
                foodAvailable={food.available}
                onClick={e => {
                  const foundFood = foods.find((ovqat) => ovqat.id === food.id);

                  setOrderFoods([...orderFoods, foundFood]);
                }}
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default HomeContent;
