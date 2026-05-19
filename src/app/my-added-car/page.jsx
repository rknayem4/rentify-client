import MyAddedCard from "@/Components/MyAddedCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyAddedCar = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(user.id);
  const res = await fetch(`http://localhost:8000/car-collection/${user?.id}`);
  const data = await res.json();
  // console.log(data);
  return (
    <div className="container mx-auto">
      <div className="my-3 flex justify-end ">
        <Link href={"/my-add"}>
          <Button className="rounded-sm" variant="secondary">
            Add Car
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid lg:grid-cols-3 gap-4">
        {data.map((res) => (
          <MyAddedCard key={res._id} res={res}></MyAddedCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedCar;
