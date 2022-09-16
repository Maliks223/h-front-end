import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import Navbar from "../components/NavBar";
const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  console.log(item);
  let cart = JSON.parse(localStorage.getItem("cart_products")) || [];

  if (item.length === 0) {
    return (
      <div className="body1">
        <header className="header">
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have{" "}
            <span className="total-items-count">
              {localStorage.getItem("cartNumbers")}{" "}
            </span>{" "}
            items in shopping cart
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="cart_summary"  >
      <header className="head">
        <Navbar />
      </header>

      <section className="main-cart-section">
        <div className="Sections" >
          <h1>shopping Cart</h1>
          <h3>
            Cart Total : <span>{totalAmount}$</span>
          </h3>
          <p className="total-items">
            you have{" "}
            <span className="total-items-count">
              {localStorage.getItem("cartNumbers").totalItem}{" "}
            </span>{" "}
            items in shopping cart
          </p>
        </div>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
      </section>
      </div>
  );
};

export default ContextCart;

{
  /* <header className="contextcart-container"> */
}
{
  /* <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div> */
}

{
  /* the cart quantity is here */
}
{
  /* <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{localStorage.getItem("cartNumbers").qty}</p>
        </div> */
}
{
  /* </header> */
}

{
  /* <div className="card-total">
            <h3>
              Cart Total : <span>{totalAmount}$</span>
            </h3>
          </div> */
}