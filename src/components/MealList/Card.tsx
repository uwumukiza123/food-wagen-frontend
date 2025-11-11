"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import type { MealListData } from "@/types/MealList";

const MealListCard = ({
  name,
  rating,
  logo,
  price,
  status,
  image,
}: MealListData) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image src={image || ""} alt={name} fill className="object-cover" />
        <div className="absolute top-3 left-3">
          <Button
            className="font-semibold px-2 py-1 text-xs"
            text={`$${price}`}
            variant="orange"
            hasImage={true}
          />
        </div>
      </div>

      <div className="py-4">
        <div className="flex gap-3 mb-3 relative">
          <div className="shrink-0">
            <Image
              src={logo || ""}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h6 className="font-semibold text-sm truncate">{name}</h6>
            <div className="flex items-center gap-1 mt-1">
              <Image src="/img/star.svg" alt="star" width={16} height={16} />
              <span className="text-xs">{rating}</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/img/menuIcon.svg"
              alt="menu icon"
              height={20}
              width={4}
              className="cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />

            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-24 z-10">
                <button
                  className="block w-full text-left text-sm px-3 py-1 hover:bg-gray-100"
                  onClick={() => {
                    console.log("Update clicked");
                    setMenuOpen(false);
                  }}
                >
                  Edit
                </button>
                <button
                  className="block w-full text-left text-sm px-3 py-1 hover:bg-gray-100 text-red-500"
                  onClick={() => {
                    console.log("Delete clicked");
                    setMenuOpen(false);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {status && (
          <button
            className={`text-xs font-medium p-3 rounded-xl ${
              status === "open"
                ? "bg-green-100 text-green-700 border-green-200"
                : "bg-orange-100 text-orange-700 border-orange-200"
            }`}
          >
            {status}
          </button>
        )}
      </div>
    </div>
  );
};

export default MealListCard;
