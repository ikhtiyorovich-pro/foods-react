import "./home.scss";

// Pages
import HomeTop from "./home-top/home-top";
import HomeContent from "./contents/home-content/home-content";


function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <HomeTop />
        <HomeContent />
      </div>
      <div className="home__orders">Orders</div>
    </div>
  );
}

export default Home;
