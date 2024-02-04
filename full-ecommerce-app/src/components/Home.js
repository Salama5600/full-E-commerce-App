import Categories from "./Categories";
import Main from "./Main";
import Todays from "./Todays";
import OfferImg from "./OfferImg";
import AllProducts from "./AllProducts";

function Home() {
  return (
    <div className="Home">
      <Main />
      <Todays />
      <Categories />
      <OfferImg />
      <AllProducts />
    </div>
  );
}

export default Home;
