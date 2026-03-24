"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadMealIdeas() {
      const mealData = await fetchMealIdeas(ingredient);

      if (isMounted) {
        setMeals(mealData);
      }
    }

    loadMealIdeas();

    return () => {
      isMounted = false;
    };
  }, [ingredient]);

  return (
    <div className="w-full max-w-md rounded-xl bg-blue-900 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-white">
        Meal Ideas {ingredient && `for "${ingredient}"`}
      </h2>

      {ingredient === "" ? (
        <p className="text-gray-300">Select an item to see meal ideas.</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-300">No meals found.</p>
      ) : (
        <ul className="max-h-96 space-y-2 overflow-y-auto">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="rounded-lg bg-blue-800 p-3 transition hover:bg-blue-700"
            >
              <p className="font-medium text-white">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
