import classnames from "classnames";

type SectionTitleSize = "small" | "medium" | "large";

type Element = "h1" | "h2" | "h3" | "h4" | "p";

type CustomComponentProps = {
  children: React.ReactNode;
  as: Element;
  className?: string;
};

function CustomComponent({ children, as = 'p', className }: CustomComponentProps) {
  // Determine which HTML element to render based on the `as` prop
  switch (as) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;

    default:
      return <p className={className}>{children}</p>;
  }
}

type SectionTitleProps = {
  size?: SectionTitleSize;
  as?: Element;
  children?: React.ReactNode;
};

export default function SectionTitle({
  size = "medium",
  as = "p",
  children,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-2 max-w-fit">
      <CustomComponent
        as={as}
        className={classnames("font-[900]", {
          "text-[16px] line-height-[29px]": size === "small",
          "text-[20px] line-height-[29px]": size === "medium",
          "text-[26px] line-height-[29px]": size === "large",
        })}
      >
        {children}
      </CustomComponent>
      <span
        className={classnames("block bg-black font-[900]", {
          "w-[24px] h-[3px]": size === "small",
          "w-[32px] h-[4px]": size === "medium",
          "w-[48px] h-[5px]": size === "large",
        })}
      />
    </div>
  );
}
