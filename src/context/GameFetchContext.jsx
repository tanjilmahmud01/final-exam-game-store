import { createContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";

export const GameFetchContext = createContext();

export const GameDataProvider = ({ children }) => {
  const [allGames, setAllGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const goNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //   filter category
  const selectedCategory = (event) => {
    const searchedCategory = event.target.value;
    categorySearch(searchedCategory);
  };

  const categorySearch = async (searchedCategory) => {
    setLoading(true);
    const query = `*[_type == "game"] {gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url }`;
    const searchedGames = await client.fetch(query);

    const filteredGames = searchedGames.filter(
      (game) => game.gameCategory.categoryName === `${searchedCategory}`
    );

    setAllGames(filteredGames);
    setLoading(false);
  };

  //filter by search
  const userSearch = (event) => {
    const searchedText = event.target.value;
    gameSearch(searchedText);
  };

  const gameSearch = async (searchedText) => {
    setLoading(true);

    const query = `*[_type == "game" && gameName match "${searchedText}*"] {gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url, trailerUrl }`;

    const searchedGames = await client.fetch(query);
    setAllGames(searchedGames);
    setLoading(false);
  };

  const getAllGames = async () => {
    setLoading(true);

    //pagination
    const rangeSelection = (currentPage - 1) * itemsPerPage;

    const query = `*[_type == "game"]{gameName, _id, imageLink, tags, gamePrice, content, gameCategory ->{categoryName},  "imageUrl": imageLink.asset->url, trailerUrl }[${rangeSelection} ... ${
      rangeSelection + itemsPerPage + 1
    }]`;

    const games = await client.fetch(query);
    setAllGames(games);
    setLoading(false);
  };

  const getAllCategory = async () => {
    setLoading(true);
    const query = `*[_type == "category"]`;
    const gameCategories = await client.fetch(query);
    setCategories(gameCategories);
    setLoading(false);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getAllGames();
      getAllCategory();
    }, 1000);
  }, [currentPage]);

  return (
    <GameFetchContext.Provider
      value={{
        allGames,
        loading,
        setLoading,
        categories,
        currentPage,
        goNextPage,
        goPrevPage,
        userSearch,
        selectedCategory,
      }}
    >
      {children}
    </GameFetchContext.Provider>
  );
};
