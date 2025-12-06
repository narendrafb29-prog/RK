import React from "react";
import { useCart } from "../state/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  if (!open) return null;

  const total = cart.reduce((s,p) => s + (parseFloat(p.price.replace(/[^0-9.]/g,'')) * p.qty), 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1" onClick={onClose} />
      <div className="w-[420px] bg-white p-6 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Your Cart</h3>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>

        <div className="mt-4 space-y-4">
          {cart.length === 0 && <p className="text-gray-600">Cart is empty.</p>}
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.price}</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input type="number" min="1" value={item.qty} onChange={(e)=> updateQty(item.id, Math.max(1, +e.target.value))} className="w-16 p-1 border rounded" />
                  <button onClick={()=> removeFromCart(item.id)} className="text-sm text-red-500">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between font-bold text-lg">
            <div>Total</div>
            <div>${total.toFixed(2)}</div>
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={clearCart} className="flex-1 py-2 border rounded">Clear</button>
            <button className="flex-1 py-2 bg-purple-600 text-white rounded">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
