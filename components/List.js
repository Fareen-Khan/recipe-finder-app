import React from "react";

export default function List({ Ingredients }) {
  return (
    <div className="divide-y divide-slate-400 divide-opacity-30">
      <h1 className="text-xl pb-1 font-semibold text-neutral-200">Ingredients</h1>
      <ul className="mb-3 font-normal text-base pt-2 px-5 list-disc text-neutral-200">
        {Ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
