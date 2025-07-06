const BusinessCard = ({ data, onRegenerate }) => {
  return (
    <div className="space-y-3">
      <p className="text-lg text-yellow-600">⭐ Google Rating: {data.rating}</p>
      <p className="text-lg text-orange-600">📣 Reviews: {data.reviews}</p>
      <p className="italic text-gray-700">📰 {data.headline}</p>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        onClick={onRegenerate}
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;