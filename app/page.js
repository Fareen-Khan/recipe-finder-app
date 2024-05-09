import React, { Suspense } from "react";
import RecipeGrid from "../components/RecipeGrid";
import Loading from "./loading";
import { promises as fs } from "fs";
import recipesData from "../public/json/recipes.json";
import Search from "@/components/search";

export default async function Home({ searchParams }) {
  const pageParams = { page: 1, perPage: 30 };
  const data = recipesData; 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-sm">
        <h1 className="text-4xl p-4 text-center">Recipe Finder</h1>
        <Search />
        <Suspense fallback={<Loading />}>
          <RecipeGrid
            initPage={pageParams.page}
            perPage={pageParams.perPage}
            data={data}
            filter={searchParams}
          />
        </Suspense>
      </div>
    </main>
  );
}
