import { PortableTextBlock } from "sanity";

export type Category = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[];
}