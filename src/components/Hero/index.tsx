import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-[76.875%] mx-auto">
      <div className="flex">
        <div className="text-white">
          <h1 className="font-sans text-[88px] font-bold">Are you starving?</h1>
          <span>
            Within a few clicks, find meals that are accessible near you
          </span>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex gap-2">
              <Button text={"Delivery"} variant="orange" hasImage={true} />
              <Button text={"Pickup"} variant="black" hasImage={true} />
            </div>
            <div className="border-b-2 border-b-gray-100 py-2 rounded-2xl" />
            <div className="flex gap-4 pt-5">
              <div className="bg-gray-100 flex py-2 w-full">
                <Image
                  src="/img/Vector.svg"
                  alt="search icon"
                  width={18}
                  height={18}
                  className="mx-2"
                />
                <input
                  type="text"
                  placeholder="What do you like to eat today?"
                  className="placeholder:text-gray-300 placeholder:text-lg w-full"
                />
              </div>
              <Button text="Find meal" variant="red" hasImage={true} />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/img/Image.png"
            alt={"hero image"}
            height={100}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
