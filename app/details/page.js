import React from "react";
import FoodTitle from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import List from "@/components/List";
import Arrow from "@/components/arrow";

const details = ({ searchParams }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900">
      <div className="z-10 p-5 max-w-5xl w-full items-center justify-between font-sans text-sm bg-neutral-700 rounded-lg ">
        <Link
          href={"/"}
          className="px-4 py-1 rounded-full inline-flex items-center justify-center hover:bg-neutral-600"
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
              {searchParams.Method.map((step, index) => (
                <li key={index} className="mb-3 font-normal">
                  <div>
                    <h1 className="font-semibold text-lg">Step {index+1}</h1>
                    {step}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default details;
