export default function SubNavbar() {
  const goldData = [
    "Gold Price: ₹5,234 / 10g",
    "22K: ₹7,137",
    "20K: ₹6,800",
    "Change: +0.6%",
    "Updated: Just now",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-amber-100 via-yellow-500 to-amber-400 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-10 text-sm font-semibold text-gray-800">
          {/* Label */}
          <span className="hidden sm:inline-block mr-4 uppercase tracking-wide text-gray-600">
            Live Gold
          </span>

          {/* Scrolling ticker */}
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-[scroll_15s_linear_infinite]">
              {goldData.concat(goldData).map((item, i) => (
                <span key={i} className="mx-6 inline-block">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind custom keyframes via arbitrary values */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
