import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";

const CarCard = ({ data }) => {
  const {
    carImage,
    carName,
    description,
    location,
    price,
    seat,
    status,
    type,
    userEmail,
    userId,
    usrName,
    _id,
  } = data;

  return (
    <Card className="w-full ">
      <div className=" w-full flex justify-items-center ">
        <Image
          className="mx-auto rounded-2xl"
          src={data?.carImage}
          width={300}
          height={400}
          alt={carName}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{carName}</Card.Title>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Only 10 spots
            </span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default CarCard;
