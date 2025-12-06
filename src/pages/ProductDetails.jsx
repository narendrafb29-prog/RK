import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../state/CartContext";

export default function ProductDetails({ products }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => String(p.id) === id);

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-sm text-blue-600">← Back</Link>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <img src={product.img} alt={product.name} className="w-full object-contain rounded-lg bg-white p-6" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 text-yellow-400">{Array(5).fill().map((_,i)=> <span key={i} className={i<product.rating? '':'opacity-30'}>★</span>)}</div>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-2xl font-bold">{product.price}</div>
            <button onClick={()=> addToCart(product,1)} className="px-4 py-2 bg-purple-600 text-white rounded">Add to cart</button>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">Reviews</h3>
            {product.reviews?.length ? product.reviews.map((r,i)=> (
              <div key={i} className="mt-2 p-3 border rounded">
                <div className="text-sm text-yellow-400">{Array(5).fill().map((_,j)=> <span key={j} className={j<r.rating ? '':'opacity-30'}>★</span>)}</div>
                <p className="text-gray-700 mt-1">{r.text}</p>
                <div className="text-xs text-gray-400 mt-1">{new Date(r.date).toLocaleString()}</div>
              </div>
            )) : <p className="text-gray-500 mt-2">No reviews yet.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
