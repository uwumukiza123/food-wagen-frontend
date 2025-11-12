import { ButtonProps } from "@/types/Button";
import { sourceSans } from "../../../public/fonts";
import { ButtonVariants } from "@/data/buttonVariants";
import Image from "next/image";
import clsx from "clsx";

const Button = ({
  text,
  variant = "gray",
  className,
  onClick,
  hasImage,
}: ButtonProps) => {
  const variantData = ButtonVariants.find((v) => v.variant === variant);

  if (!variantData) {
    console.error(`Unknown variant: ${variant}`);
    return null;
  }

  const showImage = hasImage ?? variantData.hasImage;

  const baseClass = clsx(
    sourceSans.className,
    "rounded-2xl flex items-center justify-center gap-2 px-4 py-2 text-white",
    className
  );

  switch (variant) {
    case "orange":
      return (
        <div className={clsx(baseClass, "bg-[#FF9A0E]")} onClick={onClick}>
          {showImage && (
            <Image
              src="/img/icon.svg"
              alt="icon"
              width={16}
              height={16}
              className="inline"
            />
          )}
          <span>{text}</span>
        </div>
      );

    case "red":
      return (
        <div className={clsx(baseClass, "bg-[#F65900]")}>
          {showImage && (
            <Image
              src="/img/searchIcon.svg"
              alt="search icon"
              width={16}
              height={16}
              className="inline"
            />
          )}
          <span>{text}</span>
        </div>
      );

    case "transparent":
      return (
        <div className={clsx(baseClass, "border border-orange-700 text-black")}>
          <span>{text}</span>
        </div>
      );

    case "black":
      return (
        <div className={`${clsx(baseClass)} w-1/2`}>
          {showImage && (
            <Image
              src="/img/shoppingIcon.svg"
              alt="search icon"
              width={16}
              height={16}
              className="inline"
            />
          )}
          <span className="text-[#757575]">{text}</span>
        </div>
      );

    case "gray":
    default:
      return (
        <div
          className={clsx(baseClass, "bg-gray-500 text-white")}
          onClick={onClick}
        >
          <span>{text}</span>
        </div>
      );
  }
};

export default Button;
