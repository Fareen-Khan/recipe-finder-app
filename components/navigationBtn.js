"use client";
import React from "react";
import Arrow from "./arrow";

const NavBtn = ({ page, totalPages, goToPage }) => {
  
  return (
    <>
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 rounded-full text-white ${
            page === 1 ? "opacity-0" : ""
          } hover:bg-neutral-600 duration-200`}
          disabled={page === 1}
          onClick={() => goToPage(page - 1)}
        >
          <Arrow isLeft={true} />
        </button>
        <h2 className="px-2 text-base">
          Page {page} of {totalPages}
        </h2>
        <button
          className={`px-4 rounded-full text-white ${
            page === totalPages ? "opacity-0" : ""
          }hover:bg-neutral-600 duration-200`}
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
