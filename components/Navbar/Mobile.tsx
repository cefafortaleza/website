import { useState } from "react";

import classnames from "classnames";

import Logo from "./Logo";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-full border">
      {/* Logo / Burger Menu */}
      <div className="flex space-between w-full h-full items-center">
        <Logo />
        <button
          className="flex flex-col gap-[2px] w-6 h-6 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={classnames("h-1 w-full block bg-black transition", {
              "rotate-45 -mb-[6px]": isOpen,
            })}
          />
          <span
            className={classnames("h-1 w-full block bg-black transition", {
              "rotate-[135deg] -mb-[6px]": isOpen,
            })}
          />
          <span
            className={classnames("h-1 w-full block bg-black", {
              hidden: isOpen,
              block: !isOpen,
            })}
          />
        </button>
      </div>
      {/* Hidden Menu */}
      <div
        className={classnames(
          "absolute top-0 -left-4 w-[40%] transition border border-red-900",
          { "-translate-x-[100vw]": !isOpen, "translate-x-[0]": isOpen }
        )}
      >
        <div className="bg-white p-4 flex flex-col gap-4">
          <span>Sub menu</span>
          <span>Item 1</span>
          <span>Item 2</span>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
