"use client";

import CarCard from "@/Components/CarCard";
import { Label, ListBox, SearchField, Select } from "@heroui/react";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [cars, setCars] = useState([]);

  const carTypes = [
    { id: "sedan", name: "Sedan" },
    { id: "suv", name: "SUV" },
    { id: "hatchback", name: "Hatchback" },
    { id: "microbus", name: "Microbus" },
    { id: "pickup", name: "Pickup" },
    { id: "crossover", name: "Crossover" },
    { id: "luxury", name: "Luxury Car" },
    { id: "sports", name: "Sports Car" },
  ];

  useEffect(() => {
    const loadCars = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/search-cars?search=${search}&type=${selectedType}`,
      );

      const data = await res.json();

      setCars(data);
    };

    loadCars();
  }, [search, selectedType]);

  return (
    <div className="container mx-auto min-h-screen px-4 py-10">

      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between md:items-end mb-10">
        
        <SearchField name="search" className="w-full md:max-w-md">
          <Label>Search Cars</Label>

          <SearchField.Group>
            <SearchField.SearchIcon />

            <SearchField.Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
              placeholder="Search by car name..."
            />

            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

       
        <Select className="w-full md:max-w-xs" placeholder="Select Car Type">
          <Label>Car Type Filtering</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox onAction={(key) => setSelectedType(key)}>
              <ListBox.Item id="" textValue="all">
                All Cars
                <ListBox.ItemIndicator />
              </ListBox.Item>

              {carTypes.map((car) => (
                <ListBox.Item key={car.id} id={car.id} textValue={car.id}>
                  {car.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars?.length === 0 ? (
          <p className="text-gray-500 text-lg">No cars found.</p>
        ) : (
          cars.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
