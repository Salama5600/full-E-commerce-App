import offerImg from "../imgs/Capture.PNG";

function Main() {
  return (
    <div className="main container ">
      <ul className="list-group list-group-flush Categories-list">
        <li className="list-group-item">Categories</li>
        <li className="list-group-item">Woman’s Fashion</li>
        <li className="list-group-item">Men’s Fashion</li>
        <li className="list-group-item">Home & Lifestyle</li>
        <li className="list-group-item">Medicine</li>
        <li className="list-group-item">Sports & Outdoor</li>
        <li className="list-group-item">Baby’s & Toys</li>
        <li className="list-group-item">Groceries & Pets</li>
        <li className="list-group-item">Health & Beauty</li>
      </ul>
      <div className="offer">
        <img src={offerImg} className="offerImg" />
      </div>
    </div>
  );
}

export default Main;
