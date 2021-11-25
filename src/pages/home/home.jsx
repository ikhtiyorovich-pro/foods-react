import { useContext } from "react";
import "./home.scss";
import { Content } from "../../content/orderFoods";

// Pages
import HomeTop from "./home-top/home-top";
import HomeContent from "./contents/home-content/home-content";

function Home() {
  const { orderFoods,} = useContext(Content);
  return (
    <div className="home">
      <div className="home__content">
        <HomeTop />
        <HomeContent />
      </div>
      <div className="home__orders">
        {orderFoods.length > 0 && (
          <ul>
            {orderFoods.map(food => (
              <li>
                <strong>{food.title} </strong>
                <em>{food.number} - ta</em>
                <em>{food.price}</em>
                <button>&times;</button>
                <em>{food.price * food.number}</em>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
