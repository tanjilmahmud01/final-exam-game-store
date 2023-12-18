import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmOrder = ({ cart }) => {
  console.log(cart);

  let total = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.gamePrice;
  }, 0);

  console.log(total.toFixed(2));

  const orderConfirm = () => {
    toast.success("Order Confirmed!", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Order Details</h2>

          <div>
            {cart.map((game) => (
              <div className="flex justify-between items-center mb-2">
                <span>{game.gameName}</span>
                <span>{game.gamePrice}</span>
              </div>
            ))}
          </div>

          <div className="divider divider-neutral"></div>
          <div className="flex justify-between items-center">
            <span>Total: </span>
            <span>{total.toFixed(2)}</span>
          </div>
          <div className="card-actions justify-end">
            <button onClick={orderConfirm} className="btn btn-primary">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
