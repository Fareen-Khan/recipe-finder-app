import React from "react";
import Link from "next/link";

//TODO: fix UI for this element first

const Tile = ({ recipe }) => {
  const { Name, url, Description, Author, Ingredients, Method, image_src } =
    recipe;

  let shortDescription = Description || "";
  if (Description && Description.length > 103) {
    shortDescription = Description.substring(0, 100) + "...";
  }

  return (
    <Link
      href={{
        pathname: "/details",
        query: {
          Name: recipe.Name,
          url: recipe.url,
          Description: recipe.Description,
          Author: recipe.Author,
          Ingredients: recipe.Ingredients,
          Method: recipe.Method,
          img_src: recipe.image_src,
        },
      }}
      className="max-w-sm p-4 h-full rounded-lg shadow bg-neutral-700 hover:bg-neutral-800 hover:scale-105 duration-200"
    >
      <a href="#">
        <img className="w-full rounded-lg" src={image_src} alt={Name} />
      </a>
      <div className="">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            {Name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 line-clamp-3">
          {Description}
        </p>
        <Link
          href={{
            pathname: "/details",
            query: {
              Name: recipe.Name,
              url: recipe.url,
              Description: recipe.Description,
              Author: recipe.Author,
              Ingredients: recipe.Ingredients,
              Method: recipe.Method,
              img_src: recipe.image_src,
            },
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-neutral-950 bg-neutral-50 rounded-lg hover:bg-neutral-100"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ms-2"
            ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </Link>
  );
};

export default Tile;
