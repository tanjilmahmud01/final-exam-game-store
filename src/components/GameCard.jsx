import React, { useContext } from "react";
import { GameFetchContext } from "../context/GameFetchContext";
import { Link } from "react-router-dom";
import { GameCartContext } from "../context/GameCartContext";

const GameCard = ({ game }) => {
  const { cart, addToCart } = useContext(GameCartContext);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border border-gray-500">
        <figure>
          <img src={game.imageUrl} alt={game.gameName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {game.gameName}
            <div className="badge badge-secondary">
              {game.gameCategory.categoryName}
            </div>
          </h2>

          <div className="card-actions justify-end ">
            <span className="text-2xl me-auto text-green-500 font-semibold">
              {game.gamePrice === 0 ? "Free" : "$" + game.gamePrice}
            </span>
            <Link to={`/products/${game._id}`}>
              <button className="btn btn-primary btn-sm">Details</button>
            </Link>
            <button
              onClick={() => addToCart(game)}
              className="btn btn-primary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
