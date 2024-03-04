"use client";
import { useState, useEffect } from "react";
import Tile from "./Tile";
import NavBtn from "./navigationBtn";

export default function Page({ initPage, perPage, data, filter }) {
  const [recipes, setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(initPage);
  useEffect(() => {
    const fetchData = async () => {
      console.log(filter.query);
      try {
        if (filter.query) {
          const filteredData = data.filter((recipe) =>
            recipe.Ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(filter.query.toLowerCase())
            )
          );
          const startIndex = (page - 1) * perPage;
          const endIndex = startIndex + perPage;
          const recipesForPage = filteredData.slice(startIndex, endIndex);
          setRecipes(recipesForPage);
          setTotalPages(Math.ceil(data.length / perPage));
        } else {
          const startIndex = (page - 1) * perPage;
          const endIndex = startIndex + perPage;
          const recipesForPage = data.slice(startIndex, endIndex);
          setRecipes(recipesForPage);
          setTotalPages(Math.ceil(data.length / perPage));
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchData();
  }, [page, perPage, data]);

  const goToPage = (newPage) => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const newStartIndex = newPage * perPage;
      const newEndIndex = (newPage + 1) * perPage;
      const newRecipes = data.slice(newStartIndex, newEndIndex);
      setRecipes(newRecipes);
      setPage(newPage);
    }, 100);
  };

  return (
    <div>
      <div className="flex justify-end">
        <NavBtn page={page} totalPages={totalPages} goToPage={goToPage} />
      </div>
      <div className="grid grid-cols-3 gap-4 items-center justify-center m-4">
        {recipes.map((recipe, i) => (
          <Tile key={i} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
