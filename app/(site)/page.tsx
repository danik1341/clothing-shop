"use client";

import { getBrands, getCategories, getClothes } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const clothes = await getClothes();
  const brands = await getBrands();
  const categories = await getCategories();

  return (
    <main className="flex min-h-screen flex-col items-center min-w-full p-6">
      <div className="w-full">
        {brands.map((brand) => (
          <div key={brand._id}>
            <img src={brand.image} alt="Nike" className="h-[150px] w-full" />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h1 className="font-bold text-base p-3">Categories</h1>
        <div className="mt-2 flex snap-x snap-mandatory w-screen h-7 overflow-scroll scrollbar-hide">
          <div className="flex flex-shrink-0 gap-3 snap-start min-w-16">
            {categories.map((category) => (
              <Link key={category._id} href={`${category.slug}`}>
                <button className="rounded-xl bg-gray-400 drop-shadow-lg hover:bg-gray-600 h-6 w-16 text-[10px] font-semibold">
                  {category.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex snap-x snap-mandatory w-screen h-44 overflow-scroll scrollbar-hide">
          <div className="w-36 h-44 flex flex-shrink-0 gap-5">
            {clothes.map((clothing) => (
              <Link key={clothing._id} href={`/clothes/${clothing.slug}`}>
                <button>
                  <img
                    src={clothing.image}
                    className="rounded-2xl w-36 h-36 drop-shadow-sm"
                  />
                  <div className="w-32 h-7 ml-2">
                    <p className="font-semibold text-[10px] text-center">
                      {clothing.name}
                    </p>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-base p-2">Offers</h1>
        <div className="flex snap-x snap-mandatory w-screen h-40 overflow-scroll scrollbar-hide mt-5">
          <div className="flex flex-shrink-0 gap-1 w-32 h-36">
            {clothes.map((clothing) => (
              <Link key={clothing._id} href={`/clothes/${clothing.slug}`}>
                <button>
                  <img
                    src={clothing.image}
                    className="rounded-2xl drop-shadow-sm w-28 h-28 ml-1"
                  />
                  <div className="w-32 h-7">
                    <p className="font-semibold text-[10px] text-center">
                      {clothing.name}
                    </p>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
