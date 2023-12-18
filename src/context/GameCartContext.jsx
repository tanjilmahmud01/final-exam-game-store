import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GameCartContext = createContext();

export const GameCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [test, setTest] = useState("Tanjil");
  const addToCart = (addedGame) => {
    let cartInfo = [...cart];

    let alreadyAdded = cartInfo.find(
      (cartItem) => cartItem.gameName === addedGame.gameName
    );
    if (alreadyAdded) {
      setCart(cartInfo);
    } else {
      cartInfo = [...cartInfo, addedGame];
      setCart(cartInfo);
    }

    toast.success("Added To The Cart!", {
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

  let total = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.gamePrice;
  }, 0);

  return (
    <GameCartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </GameCartContext.Provider>
  );
};
