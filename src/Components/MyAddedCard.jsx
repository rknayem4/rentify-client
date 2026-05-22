import { Card } from "@heroui/react";
import Image from "next/image";
import { EditCardForm } from "./EditeCardForm";
import { DeleteAlert } from "./DeleteAlert";
import {
  FaCarSide,
  FaChair,
  FaLocationDot,
  FaCircleCheck,
} from "react-icons/fa6";

const MyAddedCard = ({ res }) => {
  const {
    carImage,
    carName,
    location,
    price,
    seat,
    status,
  } = res;

  return (
    <Card className="w-full overflow-hidden rounded-3xl border border-gray-100  shadow-sm hover:shadow-2xl transition-all duration-300">
      
      {/* Car Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={carImage}
          fill
          alt={carName}
          className="object-cover hover:scale-110 transition-transform duration-500"
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-[#004078] shadow">
          {status}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col gap-5">
        
        {/* Title + Price */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-[#004078]">
              {carName}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Premium rental experience
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-extrabold text-[#753fdb]">
              ${price}
            </h3>

            <span className="text-sm text-gray-500">
              /day
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaChair />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Seat Capacity
              </p>

              <h4 className="font-semibold text-[#004078]">
                {seat} Seats
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaLocationDot />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Pickup
              </p>

              <h4 className="font-semibold text-[#004078] truncate">
                {location}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-[#eef5ff] text-[#004078] flex items-center justify-center">
              <FaCircleCheck />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Status
              </p>

              <h4 className="font-semibold text-[#004078] capitalize">
                {status}
              </h4>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <Card.Footer className="p-0 pt-2 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full">
            <EditCardForm res={res} />
          </div>

          <div className="w-full">
            <DeleteAlert res={res} />
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default MyAddedCard;