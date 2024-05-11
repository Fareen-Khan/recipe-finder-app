import React from "react";

export default function List({ Ingredients }) {
  return (
    <div className="divide-y divide-slate-400 divide-opacity-30">
      <h1 className="text-lg pb-1 font-semibold">Ingredients</h1>
      <ul className="mb-3 font-normal pt-2 px-5 list-disc">
        {Ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
