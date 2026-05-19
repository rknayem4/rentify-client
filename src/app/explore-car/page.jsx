import CarCard from "@/Components/CarCard";
import React from "react";

const ExploreCarPage = async () => {
  const res = await fetch("http://localhost:8000/car-collection");
  const cars = await res.json();
  console.log(cars);
  return (
    <div className="container mx-auto">
      <h2>All Car Here</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car._id} car={car}></CarCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreCarPage;
