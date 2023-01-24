import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:block px-4">
        <Desktop />
      </div>
      <div className="w-full h-full block lg:hidden lg:block px-4">
        <Mobile />
      </div>
    </>
  );
};

export default Navbar;
