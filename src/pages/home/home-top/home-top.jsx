import "./home-top.scss";

// Images
import SearchIcon from "../../../assets/images/image.svg";
import { NavLink } from "react-router-dom";

function HomeTop() {
  const getDate = () => new Date().toDateString();
  return (
    <div className="home-top">
      <div className="home-top__top">
        <div className="user-info">
          <h2 className="user-info__name">Muhammadali Fayzullayev</h2>
          <span className="user-info__date">{getDate()}</span>
        </div>
        <form className="user-info__form">
          <img className="search-img" src={SearchIcon} alt="" />
          <input
            className="user-info__input"
            type="text"
            placeholder="Search for food, coffe, etc.."
          />
        </form>
      </div>
      <ul className="links-wrapper">
        <li className="links-wrapper__lists">
          <NavLink  className="links-wrapper__navlinks" activeClassName="links-wrapper__link-active" to='/hotdishes'>Hot Dishes</NavLink>
        </li>
        <li className="links-wrapper__lists">
          <NavLink  className="links-wrapper__navlinks" activeClassName="links-wrapper__link-active" to='/colddishes'>Cold Dishes</NavLink>
        </li>
        <li className="links-wrapper__lists">
          <NavLink  className="links-wrapper__navlinks" activeClassName="links-wrapper__link-active" to='/soup'>Soup</NavLink>
        </li>
        <li className="links-wrapper__lists">
          <NavLink  className="links-wrapper__navlinks" activeClassName="links-wrapper__link-active" to='/grill'>Grill</NavLink>
        </li>
        <li className="links-wrapper__lists">
          <NavLink  className="links-wrapper__navlinks" activeClassName="links-wrapper__link-active" to='/appetizer'>Appetizer</NavLink>
        </li>
        <li className="links-wrapper__lists">
          <NavLink  className="links-wrapper__navlinks" activeClassName="links-wrapper__link-active" to='/dessert'>Dessert</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeTop;
