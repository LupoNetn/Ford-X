import React from "react";
import image from "../../assets/pricing-map-img.jpeg";
import { CheckCircle, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19/mo",
      desc: "Perfect for small businesses looking to begin optimizing logistics.",
      features: ["Basic logistics support", "1 warehouse location", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$49/mo",
      desc: "Designed for growing businesses needing advanced logistics solutions.",
      features: ["Advanced tracking", "3 warehouse locations", "Priority support"],
      cta: "Choose Premium",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored solutions for global enterprises with complex logistics needs.",
      features: ["Unlimited logistics", "Global coverage", "Dedicated account manager"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div
      className="relative bg-blue-900 text-white py-14 px-6 mt-5 md:mt-7 lg:mt-14"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <p className="text-sm sm:text-base font-semibold bg-white/20 px-4 py-1 rounded-full inline-block tracking-wide">
          Pricing Plan
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Suitable for Every <span className="text-red-400">Business</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          Flexible plans crafted to match your logistics needs — from startups to enterprises.
        </p>

        {/* Plans */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white text-blue-950 rounded-3xl shadow-2xl p-10 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ${
                plan.popular ? "border-4 border-red-400 shadow-red-200" : ""
              }`}
            >
              {/* Popular Ribbon */}
              {plan.popular && (
                <div className="absolute -top-4 right-6 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
                <p className="text-gray-600 mb-6 text-base">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-blue-900 text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-blue-800 transition-colors shadow-md">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
