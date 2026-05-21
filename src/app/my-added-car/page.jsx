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
  const { token } = await auth.api.getToken({
      headers: await headers(),
    });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/my-car-collection/${user.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  const data = await res.json();
  console.log(user);
  return (
    <div className="container mx-auto min-h-screen">
      <div className="my-3 flex justify-end ">
        <Link href={"/my-add"}>
          <Button className="rounded-sm" variant="secondary">
            Add Car
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {data?.length === 0 ? (
          <p>No cars found</p>
        ) : (
          data?.map((res) => <MyAddedCard key={res._id} res={res} />)
        )}
      </div>
    </div>
  );
};

export default MyAddedCar;
