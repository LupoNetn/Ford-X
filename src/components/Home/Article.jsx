import React from "react";
import image1 from "../../assets/sustainability-img.jpeg";
import image2 from "../../assets/logistics-innovation.jpeg";
import image3 from "../../assets/delivery-solutions.jpeg";

const articles = [
  {
    id: 1,
    title: "Building a Sustainable Supply Chain",
    date: "August 20, 2025",
    author: "Daniel Lupo",
    image: image1,
  },
  {
    id: 2,
    title: "Logistics Innovations Shaping 2025",
    date: "July 12, 2025",
    author: "Jane Doe",
    image: image2,
  },
  {
    id: 3,
    title: "Smart Delivery Solutions for Businesses",
    date: "June 05, 2025",
    author: "John Smith",
    image: image3,
  },
];

const Article = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12 max-w-7xl mx-auto">
        <div>
          <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
            Latest Articles
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-blue-950">
            Industry <span className="text-red-500">Insights</span> and Tips
          </h2>
        </div>
        <div className="flex flex-col md:items-end">
          <p className="text-blue-950 max-w-md mb-4 md:text-right">
            Stay ahead of the curve with our expert insights on logistics,
            technology, and business growth strategies.
          </p>
          <button className="px-6 py-2 bg-blue-950 hover:bg-blue-700 text-white rounded-full font-medium transition">
            View All Posts
          </button>
        </div>
      </div>

      {/* Articles Row */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`relative rounded-2xl overflow-hidden shadow-md group flex-1 ${
              index === 0 ? "md:flex-[2]" : "md:flex-[1]"
            } min-h-[250px] md:min-h-[350px] lg:min-h-[420px]`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${article.image})` }}
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/70" />
            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                {article.title}
              </h3>
              <p className="text-sm opacity-80">
                {article.date} • {article.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
