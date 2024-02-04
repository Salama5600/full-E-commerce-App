import {
  faCamera,
  faClock,
  faDesktop,
  faGamepad,
  faHeadphones,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Categories() {
  return (
    <div className="categories container">
      <div className="title">
        <div className="square"></div>
        <h1>Categories</h1>
      </div>
      <h2>Browse By Category</h2>
      <div className="categoriesBox">
        <div className="category">
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="categoryIcon"
          />
          <h2 className="categoryTxt">Phones</h2>
        </div>
        <div className="category">
          <FontAwesomeIcon icon={faDesktop} className="categoryIcon" />
          <h2 className="categoryTxt">Computers</h2>
        </div>
        <div className="category">
          <FontAwesomeIcon icon={faClock} className="categoryIcon" />
          <h2 className="categoryTxt">SmartWatch</h2>
        </div>
        <div className="category">
          <FontAwesomeIcon icon={faCamera} className="categoryIcon" />
          <h2 className="categoryTxt">Camera</h2>
        </div>
        <div className="category">
          <FontAwesomeIcon icon={faHeadphones} className="categoryIcon" />
          <h2 className="categoryTxt">HeadPhones</h2>
        </div>
        <div className="category">
          <FontAwesomeIcon icon={faGamepad} className="categoryIcon" />
          <h2 className="categoryTxt">Gaming</h2>
        </div>
        
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Categories;
