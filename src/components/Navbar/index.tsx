import Image from "next/image";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="py-[18.5px]">
      <div className="flex justify-between">
        <Image
          src="../../../img/logo.svg"
          alt="site logo"
          width={1000}
          height={1000}
          className="w-[197px] h-[37px]"
        />
        <Button
          text={"Add Meal"}
          variant="orange"
          hasImage={false}
          className="border border-orange-500"
        />
      </div>
    </div>
  );
};

export default Navbar;
