"use client"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CartHeader() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity ?? 0), 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity ?? 0),
    0
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">Greyball Shop</h1>
        <div>
          <span className="mr-4 text-black">Items: {totalItems}</span>
          <span className="text-black">Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}