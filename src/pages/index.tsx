"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MealList from "@/components/MealList";
import { MealListData } from "@/types/MealList";
import { MealFormData } from "@/types/Popup";
import Footer from "@/components/Footer";

const API_URL = "https://6852821e0594059b23cdd834.mockapi.io/Food";

export default function Home() {
  const [meals, setMeals] = useState<MealListData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
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

  const handleAddMeal = async (mealData: MealFormData) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mealData),
    });
    const newMeal = await res.json();
    setMeals((prev) => [...prev, newMeal]);
  };

  const handleEditMeal = async (updatedMeal: MealFormData) => {
    if (!updatedMeal.id) return;
    const res = await fetch(`${API_URL}/${updatedMeal.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMeal),
    });
    const savedMeal = await res.json();
    setMeals((prev) =>
      prev.map((meal) => (meal.id === savedMeal.id ? savedMeal : meal))
    );
  };

  const handleDeleteMeal = async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setMeals((prev) => prev.filter((meal) => meal.id !== id));
  };

  return (
    <div>
      <div className="w-[76.875%] mx-auto">
        <Navbar onAddMeal={handleAddMeal} />
      </div>

      <div className="bg-[#FF9A0E]">
        <Hero />
      </div>

      <section className="w-[76.875%] mx-auto my-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading meals...</p>
        ) : (
          <MealList
            data={meals}
            onEditMeal={handleEditMeal}
            onDeleteMeal={handleDeleteMeal}
          />
        )}
      </section>

      <Footer />
    </div>
  );
}
