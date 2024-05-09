"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({placeholder}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term){
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-center">
      <input
        className="w-2/3 rounded-lg p-4 text-black"
        type="text"
        placeholder="Enter Items"
        onChange={e => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
