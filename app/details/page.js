import React from "react";
import FoodTitle from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import List from "@/components/List";
import Arrow from "@/components/arrow";

const details = ({ searchParams }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 p-5 max-w-5xl w-full items-center justify-between font-sans text-sm bg-slate-800 rounded-lg customShadow">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <Link href={"/"}>
              <Arrow isLeft={true}/>
            </Link>
          </div>
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
            <List 
              Ingredients={searchParams.Ingredients}
            />
          </div>
          <div className="col-span-2">
            <p className="mb-3 font-normal">{searchParams.Method}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default details;
