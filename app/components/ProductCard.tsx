"use client"

import { Product } from "../models/product.model";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description.substring(0, 100)}...</p>
      <p className="text-lg font-bold">{product.price} {product.currency}</p>
      <p className="text-yellow-500">Rating: {product.rating}</p>
    </div>
  );
}