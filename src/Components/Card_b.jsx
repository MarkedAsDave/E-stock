import React from "react";

const CardB = ({Btitle})  => {
  // const Products = JSON.parse(localStorage.getItem("products")) || []; // get stored products from local storage, default to empty array if null
  
  return (
    <div className="Cardb-main"> 
      <div className="ctitle">{Btitle}</div>
      <div className="cardt-text">Available Products</div>
      <div className="itemContainer">
      <ul className="bitem-list">
      {/* {Products.map((product, index) => (
        <li className="bitem" key={index}>
           
            <div className="pname-div">
              <p className="pname">{product.productName}</p>
              </div>
          
          
            <div className="quanti-div">
              <p className="quanti">{product.quantity}</p>
              </div>
           
          </li>
        ))} */}
      </ul>
      </div>
    </div>
  );
};

export default CardB;
