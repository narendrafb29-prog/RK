import React, { useState } from "react";

export default function ReviewModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-3">Write a Review</h2>

        <label className="block mb-2">Rating:</label>
        <select
          className="w-full border p-2 rounded mb-4"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{r} Stars</option>
          ))}
        </select>

        <textarea
          className="w-full border p-2 rounded h-24"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="flex justify-end mt-4 gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => onSubmit(rating, review)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
