"use client"

import { useState, useEffect } from "react";
import { Product } from "../models/product.model";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";

interface ProductListingProps {
  products: Product[];
}

export default function ProductListing({ products: initialProducts }: ProductListingProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('price');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(initialProducts);
  const productsPerPage = 10;

  useEffect(() => {
    const filtered = initialProducts.filter((product) =>
      product.title.includes(searchTerm)
    );
    const sorted = [...filtered].sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    setSortedProducts(sorted);
  }, [initialProducts, searchTerm, sortBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleSort = (sortBy: 'price' | 'rating') => {
    setSortBy(sortBy);
  };

  return (
    <>
      {/* Search bar */}
      <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button
          onClick={() => handleSort('price')}
          className={`mr-2 px-4 py-2 rounded ${sortBy === 'price' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Sort by Price
        </button>
        <button
          onClick={() => handleSort('rating')}
          className={`px-4 py-2 rounded ${sortBy === 'rating' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Sort by Rating
        </button>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(sortedProducts.length / productsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}