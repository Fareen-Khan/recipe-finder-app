import React from "react";
import Link from "next/link";

const Tile = ({ recipe }) => {
  const {Name, url, Description, Author, Ingredients, Method, image_src} = recipe

  let shortDescription = Description || "";
  if (Description && Description.length > 103){
    shortDescription = Description.substring(0, 100) + "...";
  }

  return (
    <div className="max-w-sm p-4 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900 hover:scale-105 duration-200">
      <a href="#">
        <img className="w-full" src={image_src} alt={Name} />
      </a>
      <div className="">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {Description}
        </p>
        <Link
          href={{
            pathname: '/details',
            query: { 
              Name:recipe.Name,
              url: recipe.url,
              Description: recipe.Description,
              Author: recipe.Author,
              Ingredients: recipe.Ingredients,
              Method: recipe.Method,
              img_src: recipe.image_src
            },
          }}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Tile;
