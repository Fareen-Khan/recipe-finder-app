import React from "react";
import FoodTitle from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import List from "@/components/List";
import Arrow from "@/components/arrow";

const details = ({ searchParams }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-topo-img">
      <div className="z-10 p-5 max-w-5xl w-full items-center justify-between font-sans text-sm bg-neutral-700/30 backdrop-blur-md rounded-lg ">
        <Link
          href={"/"}
          className="px-4 py-1 rounded-full inline-flex items-center justify-center text-neutral-200 hover:bg-neutral-600"
        >
          <Arrow isLeft={true} />
        </Link>
        <div className="pt-1 grid grid-cols-2 gap-5">
          <Image
            src={searchParams.img_src}
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div>
            <FoodTitle
              foodTitle={searchParams.Name}
              author={searchParams.Author}
            />
            <List Ingredients={searchParams.Ingredients} />
          </div>
          <div className="col-span-2">
            <ul className="list-none pl-6">
              {Array.isArray(searchParams.Method) ? (
                searchParams.Method.map((step, index) => (
                  <li key={index} className="mb-3 font-normal">
                    <div>
                      <h1 className="font-semibold text-lg text-neutral-200">
                        Step {index + 1}
                      </h1>
                      <p className="text-base text-neutral-200">{step}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="mb-3 font-normal">
                  <div>
                    <h1 className="font-semibold text-lg text-neutral-200">Step 1</h1>
                    <p className="text-base text-neutral-200">{searchParams.Method}</p>
                  </div>
                </li>
              )}
            </ul>
            <h1 className="text-center font-bold text-xl text-neutral-200">ENJOY!</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default details;
