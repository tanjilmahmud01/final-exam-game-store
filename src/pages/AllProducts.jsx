import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { GameFetchContext } from "../context/GameFetchContext";
import Loader from "../components/Loader";
import GameCard from "../components/GameCard";

const AllProducts = () => {
  const {
    allGames,
    loading,
    categories,
    userSearch,
    selectedCategory,
    currentPage,
    goNextPage,
    goPrevPage,
  } = useContext(GameFetchContext);

  return (
    <Layout>
      <div className="">
        {/* search and filter by category */}
        <div className="flex md:flex-row flex-col justify-center mt-5 gap-5">
          <input
            onChange={userSearch}
            type="search"
            placeholder="Search Games"
            className="input input-bordered input-info w-full max-w-xs"
          />

          <select
            onChange={selectedCategory}
            className="select select-info w-full max-w-xs"
          >
            {categories.map((category) => (
              <option key={category._id}>{category.categoryName}</option>
            ))}
          </select>
        </div>
        {/* loader */}
        <div className="flex justify-center mt-5">{loading && <Loader />}</div>
        {/* game cards */}

        {/* if no games found in search result */}
        {allGames.length === 0 ? (
          <span className="flex justify-center text-xl lg:text-2xl font-semibold mt-4">
            No Games Found
          </span>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 container mx-auto ">
            {allGames.slice(0, 6).map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        )}

        {/* pagination controls */}
        <div className="container mx-auto flex justify-between mt-10 ">
          <button
            onClick={goPrevPage}
            className="btn btn-outline btn-primary ms-10"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="btn bg-red-800 text-sm lg:text-lg text-white">
            {currentPage}
          </span>

          <button
            onClick={goNextPage}
            disabled={allGames.length < 7}
            className="btn btn-outline btn-secondary me-10"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
