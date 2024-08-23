import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import warning from "../../public/assets/images/warning.png";
import success from "../../public/assets/images/success.png";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <main className="home-layout bg-cover bg-center bg-fixed min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: "bg-[#1c1c1c] flex p-3 rounded-xl gap-3 items-center",
              title: "font-ttfir text-base font-medium text-white",
            },
          }}
          icons={{
            warning: (
              <div className="h-5 w-5 flex items-center justify-center">
                <Image height={100} width={100} src={warning} alt="warning" />
              </div>
            ),
            success: (
              <div className="h-5 w-5 flex items-center justify-center">
                <Image height={20} width={20} src={success} alt="success" />
              </div>
            ),
          }}
        />
      </main>
    </>
  );
};

export default HomeLayout;
