import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex gap-2 items-center">
        <div className="p-2 pl-0">
          <Image src="/logocefa2.png" alt="CEFA Logo" width={80} height={80} />
        </div>
        <div className="flex flex-col gap-[2px] max-w-[160px]">
          <span className="uppercase text-lg font-black">Cefa</span>
          <span className="font-thin text-sm">
            Centro Espírita Francisco de Assis
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
