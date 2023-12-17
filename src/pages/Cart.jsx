import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { GameCartContext } from "../context/GameCartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart } = useContext(GameCartContext);

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Game</th>
                <th>Category</th>
                <th>Price</th>
                <th>Tags</th>
                <th>Checkout</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((game) => (
                <tr key={game._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={game.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{game.gameName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-accent badge-sm">
                      {game.gameCategory.categoryName}
                    </span>
                  </td>
                  <td>{game.gamePrice}</td>
                  <th>
                    <ul>
                      {game.tags.map((tag) => (
                        <li>{tag}</li>
                      ))}
                    </ul>
                  </th>
                  <th>
                    <button className="btn btn-secondary btn-xs">
                      Checkout
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot></tfoot>
          </table>
        </div>
        <div className="mt-4 flex justify-center border-2 border-red-600 ">
          <Link to={"/checkout"}>
            <button className="btn btn-info">Checkout</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
