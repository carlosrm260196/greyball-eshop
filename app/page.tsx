import { fetchProducts } from "./utils/api";

import ProductListing from "./components/ProductListing";

export default async function Home() {
  const products = await fetchProducts();


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <ProductListing products={products} />
    </div>
  );
}