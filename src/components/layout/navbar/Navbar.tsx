import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <Navbar className="bg-black" position="static">
      <NavbarBrand>
        <div>
          <p className="font-bold text-inherit">Alfonso Velarde Mota</p>
          <p className="font-thin text-sm mt-[-5px] tracking-widest">
            web developer
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-red-500" aria-current="page">
            My Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
