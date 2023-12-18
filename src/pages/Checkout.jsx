import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { GameCartContext } from "../context/GameCartContext";
import Cart from "./Cart";
import ConfirmOrder from "../components/ConfirmOrder";

const Checkout = () => {
  const { cart } = useContext(GameCartContext);
  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <ConfirmOrder cart={cart} />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
