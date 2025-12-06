import React, { useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import ReviewModal from "../components/ReviewModal";
import { useCart } from "../state/CartContext";

export default function Home({ products, setProducts }) {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function openReviews(product) {
    setSelected(product);
    setModalOpen(true);
  }

  function submitReview(productId, review) {
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, reviews: [...(p.reviews||[]), review], rating: Math.round(((p.rating*(p.reviews?.length||0))+review.rating)/((p.reviews?.length||0)+1)) } : p));
  }

  return (
    <div>
      <Banner />
      <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-800">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onView={() => openReviews(p)} onAdd={() => addToCart(p,1)} />
        ))}
      </div>

      <ReviewModal product={selected} onClose={() => setModalOpen(false)} onSubmit={submitReview} />
    </div>
  );
}
