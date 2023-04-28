"use client"

import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { Clothes } from '@/types/Clothes';
import { Brands } from '@/types/Brands';
import { Category } from '@/types/Category';

export async function getClothes(): Promise<Clothes[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "cloth"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`
    )
}
export async function getCloth(slug: string): Promise<Clothes> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "cloth" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
      { slug }
    )
  }
export async function getBrands(): Promise<Brands[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'brand']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            url,
            content
        }`
    )
}
export async function getBrand(slug: string): Promise<Brands> {
    return createClient(clientConfig).fetch(
        groq`*[type == 'brand' && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            url,
            content
        }`,
        { slug }
    )
} 
export async function getCategories(): Promise<Category[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "category"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    )
  }
  export async function getCategory(slug: string): Promise<Category> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "category" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }`,
      { slug }
    )
}