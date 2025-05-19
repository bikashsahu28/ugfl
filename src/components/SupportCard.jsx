function SupportCard({ title, description, buttonText }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-amber-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors text-sm">
        {buttonText}
      </button>
    </div>
  );
}

export default SupportCard;