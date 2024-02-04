import { useEffect, useState } from "react";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="allProducts container">
      <div className="title">
        <div className="square"></div>
        <h1>Our Products</h1>
      </div>
      <h2>Explore Our Products</h2>
      <div className="productsSec">
        <div className="products">
          {products.slice(7, 16).map((ele) => (
            <div className="cardBox" key={ele.id}>
              <img src={ele.image} className="cardImg" />
              <h2 className="cardTitle">{ele.title}</h2>
              <div className="priceBox">
                <p className="price">${ele.price}</p>
                <p className="oldPrice">${ele.oldPrice}</p>
              </div>
              <p className="addCartBtn">Add to cart +</p>
            </div>
          ))}
        </div>

        <a className=" orange-btn">View All Products</a>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default AllProducts;
