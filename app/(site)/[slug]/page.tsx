"use client";

import { getCategory } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Category({ params }: Props) {
  const category = await getCategory(params.slug);

  return (
    <div className="flex min-h-screen flex-col items-center min-w-full p-6">
      <h1 className="font-semibold text-lg">{category.title}</h1>
      <div className="w-fit h-20">
        <PortableText value={category.content} />
      </div>
    </div>
  );
}
