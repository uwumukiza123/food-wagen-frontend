import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import MealModal from "../ui/Popup";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isModalOpen ? "filter- blur-sm-" : ""
        }`}
      >
        <div className="py-[18.5px]">
          <div className="flex justify-between items-center">
            <Image
              src="/img/logo.svg"
              alt="site logo"
              width={197}
              height={37}
              className="w-[197px] h-[37px]"
            />
            <Button
              text="Add Meal"
              variant="orange"
              hasImage={false}
              className="border border-orange-500 cursor-pointer"
              onClick={handleOpenModal}
            />
          </div>
        </div>
      </div>

      <MealModal isOpen={isModalOpen} onClose={handleCloseModal} mode="add" />
    </>
  );
};

export default Navbar;
