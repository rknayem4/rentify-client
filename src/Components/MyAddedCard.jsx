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
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <EditCardForm res={res}></EditCardForm>
          <DeleteAlert carName={carName} ></DeleteAlert>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default MyAddedCard;
