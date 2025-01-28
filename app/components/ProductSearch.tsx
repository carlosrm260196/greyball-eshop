"use client"; 

interface ProductSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ProductSearch({
  searchTerm,
  setSearchTerm,
}: ProductSearchProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded w-full mb-4 text-black"
    />
    
  );
}