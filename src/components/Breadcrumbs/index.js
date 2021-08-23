import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav class="bg-secondary p-3 rounded w-full mt-3 mb-5">
      <ol class="list-reset flex text-grey-dark">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <>
              <li
                key={index}
                className={index === breadcrumbs.length - 1 && "font-semibold"}
              >
                <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
              </li>
              {index < breadcrumbs.length - 1 && (
                <li>
                  <span class="mx-2">/</span>
                </li>
              )}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
