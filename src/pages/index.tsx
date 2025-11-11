"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MealList from "@/components/MealList";
import { MealListData } from "@/types/MealList";
import Footer from "@/components/Footer";

export default function Home() {
  const [meals, setMeals] = useState<MealListData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6852821e0594059b23cdd834.mockapi.io/Food")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meals:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="w-[76.875%] mx-auto">
        <Navbar />
      </div>

      <div className="bg-[#FF9A0E]">
        <Hero />
      </div>

      <section className="w-[76.875%] mx-auto my-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading meals...</p>
        ) : (
          <MealList data={meals} />
        )}
      </section>
      <Footer />
    </div>
  );
}
