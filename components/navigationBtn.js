"use client";
import React from "react";
import Arrow from "./arrow";

const NavBtn = ({ page, totalPages, goToPage }) => {
  
  return (
    <>
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 rounded-full text-neutral-200 ${
            page === 1 ? "opacity-0" : ""
          } hover:bg-neutral-600/50 duration-200`}
          disabled={page === 1}
          onClick={() => goToPage(page - 1)}
        >
          <Arrow isLeft={true} />
        </button>
        <h2 className="px-2 text-base text-neutral-200">
          Page {page} of {totalPages}
        </h2>
        <button
          className={`px-4 rounded-full text-neutral-200 ${
            page === totalPages ? "opacity-0" : ""
          }hover:bg-neutral-600/50 duration-200`}
          disabled={page === totalPages}
          onClick={() => goToPage(page + 1)}
        >
          <Arrow isLeft={false} />
        </button>
      </div>
    </>
  );
};

export default NavBtn;
