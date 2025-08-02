"use client";

import dynamic from "next/dynamic";

const SearchFilter = dynamic(() => import("./SearchFilter"), {
  ssr: false,
  loading: () => <div className="p-6">Loading search filter...</div>,
});

const SearchFilterWrapper = () => {
  return <SearchFilter />;
};

export default SearchFilterWrapper;
