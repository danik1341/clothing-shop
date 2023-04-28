"use client";

import { getCloth } from "@/sanity/sanity-utils";
import { IoIosArrowBack } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { clothing: string };
};

export default async function Clothing({ params }: Props) {
  if (!params) return <div>Loading....</div>;

  const slug = params.clothing;
  const clothing = await getCloth(slug);

  return (
    <div className="flex min-h-screen flex-col items-center min-w-full p-6">
      <div className="self-start w-full h-10 flex flex-row">
        <Link href="/">
          <IoIosArrowBack className="w-6 h-6" />
        </Link>
        <h1 className="font-semibold text-xl">{clothing.name}</h1>
      </div>
      <div className="flex flex-row self-start w-20 h-5 mt-6">
        <BiDollar className="w-5 h-5" />
        <span className="font-semibold text-sm">249,99</span>
      </div>
      <div className="w-72 h-72 rounded-2xl m-8">
        <img src={clothing.image} className="w-72 h-72" />
      </div>
      <div className="w-full h-24 mt-2">
        <h1 className="font-semibold text-xl">Size</h1>
        <ul className="m-2 flex flex-row gap-5">
          <li>
            <button className="font-medium text-sm border bottom-2 border-gray-600 bg-inherit rounded w-9 h-7">
              XS
            </button>
          </li>
          <li>
            <button className="font-medium text-sm border bottom-2 border-gray-600 bg-inherit rounded w-9 h-7">
              S
            </button>
          </li>
          <li>
            <button className="font-medium text-sm border bottom-2 border-gray-600 bg-inherit rounded w-9 h-7">
              M
            </button>
          </li>
          <li>
            <button className="font-medium text-sm border bottom-2 border-gray-600 bg-inherit rounded w-9 h-7">
              L
            </button>
          </li>
          <li>
            <button className="font-medium text-sm border bottom-2 border-gray-600 bg-inherit rounded w-9 h-7">
              XL
            </button>
          </li>
        </ul>
        <div className="mt-5">
          <PortableText value={clothing.content} />
        </div>
      </div>
      <button className="w-full h-12 bg-gray-800 rounded-2xl font-bold text-xl text-white m-20">
        Buy Now
      </button>
    </div>
  );
}
