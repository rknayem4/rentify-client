import CarCard from "@/Components/CarCard";
import React from "react";

const ExploreCarPage = async () => {
  const res = await fetch("http://localhost:8000/car-collection");
  const cars = await res.json();
  console.log(cars);
  return (
    <div className="container mx-auto">
      <h2>All Car Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((data) => (
          <CarCard key={data._id} data={data}></CarCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreCarPage;
