import Image from "next/image";
import { footerIcons } from "../../../config/common-config.json";

export const Footer = () => {
  return (
    <footer className="mt-12 p-6 flex justify-center md:justify-between items-center border-t border-[#3F3F3F] w-full">
      <span className="text-[17px] text-[#BFBFBF] font-medium font-alliance hidden md:block">
        © 2024 Vestra
      </span>
      <div className="flex space-x-4">
        {footerIcons.map((icon, index) => (
          <Image
            key={index}
            src={`assets/images/${icon}`}
            alt={icon}
            height={20}
            width={20}
          />
        ))}
      </div>
    </footer>
  );
};
