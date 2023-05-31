import { FC, ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-gradient-to-r from-[#83a4d4] to-[#b6fbff] dark:from-[#141E30] dark:to-[#465669]">
      <Navbar />
      <div className="h-full w-full py-3 px-3 mb-10 flex flex-col items-center justify-center ">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
