import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { EditCardForm } from "./EditeCardForm";
import { DeleteAlert } from "./DeleteAlert";

const MyAddedCard = ({ res }) => {
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
  } = res;
  return (
    <Card className="w-full flex flex-col">
      <div className=" w-full flex justify-items-center flex-2">
        <Image
          className="mx-auto rounded-2xl"
          src={res?.carImage}
          width={300}
          height={400}
          alt={carName}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{carName}</Card.Title>
        </Card.Header>
        <div className="text-left">
          <div className="flex justify-between items-center gap-3">
            <span>
              Daily Price: <strong>{price}</strong>
            </span>
            <span>
              Seat Capacity: <strong>{seat}</strong>
            </span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <span>
              Pickup Location: <strong> {location}</strong>
            </span>
            <span>
              Status: <strong>{status}</strong>
            </span>
          </div>
        </div>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <EditCardForm res={res}></EditCardForm>
          <DeleteAlert res={res}></DeleteAlert>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default MyAddedCard;
