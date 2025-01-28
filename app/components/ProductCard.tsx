"use client"

import { useDispatch } from "react-redux";
import { Product } from "../models/product.model";
import { addToCart } from "../store/features/cartSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="font-medium">{product.description.substring(0, 100)}...</p>
      <p className="text-lg font-bold">${product.price} {product.currency}</p>
      <p className="text-yellow-500">Rating: {product.rating}</p>
      <button className="underline" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}