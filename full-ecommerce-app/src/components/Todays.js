import { useEffect, useState } from "react";

function Todays() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/todays")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const disProducts = products.slice(3, 12);

  return (
    <div className="todays container">
      <div>
        <div className="title">
          <div className="square"></div>
          <h1>Today's</h1>
        </div>
        <h2>Flash Sales</h2>
      </div>
      <div className="productsSec">
        <div className="products">
          {disProducts.map((ele) => (
            <div className="cardBox" key={ele.id}>
              <div className="imgBox">
                <img src={ele.image} className="cardImg" />
              </div>
              <h2 className="cardTitle">{ele.title}</h2>
              <div className="priceBox">
                <p className="price">${ele.price}</p>
                <p className="oldPrice">${ele.oldPrice}</p>
              </div>
              <p className="addCartBtn">Add to cart +</p>
            </div>
          ))}
        </div>
        <a className="btn">View All Products</a>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Todays;
