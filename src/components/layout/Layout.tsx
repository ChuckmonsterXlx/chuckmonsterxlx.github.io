import { ReactNode } from "react";
import CustomNavbar from "./navbar/Navbar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <CustomNavbar />
      <div className="p-4 lg:ml-64">
        <div className="p-4 mt-[102px]">{children}</div>
      </div>
    </>
  );
};

export default Layout;
