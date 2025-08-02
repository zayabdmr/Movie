"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Movies = dynamic(() => import("./Movies"), {
  ssr: false,
});

const MoviesWrapper = () => {
  return (
    <Suspense fallback={<div className="p-6">Loading movies...</div>}>
      <Movies />
    </Suspense>
  );
};

export default MoviesWrapper;
