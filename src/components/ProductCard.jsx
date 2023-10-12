import React from "react";

export default function ProductCard({ image, title, price,category, subcategory, discount, stars }) {
  const url = "http://localhost:4201/api";
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
      <div class="flex max-w-screen-xl mx-2 my-4 w-[15.5rem]  md:grid-cols-2 lg:grid-cols-3">
        <article class="rounded-xl bg-white p-3 w-full border border-gray-200 hover:border-gray-400">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img
                src={url + "/get_product_image/" + image}
                className="h-[16rem] object-cover object-center w-full"
                alt="Hotel Photo"
              />
              <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-500 drop-shadow-md"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-gray-700 ml-1 text-xs">4.9</span>
              </div>
            </div>

            <div class="mt-1 p-2">
              <h2 class="text-slate-700">{title}</h2>
              <p class="text-slate-400 mt-1 text-sm">{category}, {subcategory}</p>

              <div class="mt-3 flex items-end justify-between">
                <p>
                  <span class=" font-bold text-gray-700">
                    {formatterPeso.format(price)}
                  </span>
                  <span class="text-slate-400 text-xs">/</span>
                  <span class="text-slate-400 text-xs line-through ">$68.000</span>
                </p>

                <div class="group inline-flex rounded-xl bg-gray-200 p-2 hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:text-gray-200 h-4 w-4 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>

  );
}
