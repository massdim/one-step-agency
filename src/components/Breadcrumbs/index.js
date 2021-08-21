import React from "react";

const Breadcrumbs = () => {
  return (
    <nav class="bg-secondary p-3 rounded w-full mb-5">
      <ol class="list-reset flex text-grey-dark">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span class="mx-2">/</span>
        </li>
        <li>
          <a href="#">Library</a>
        </li>
        <li>
          <span class="mx-2 ">/</span>
        </li>
        <li className="font-bold">Data</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
