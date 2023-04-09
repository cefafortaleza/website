import classnames from 'classnames';
import Link from 'next/link';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  external?: boolean;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  onClick,
  children,
  asLink,
  href,
  external,
  className,
  disabled,
}: ButtonProps) {
  if (asLink) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classnames(
            'bg-black hover:bg-white transition px-8 py-2 max-w-fit text-white hover:no-underline hover:text-[#333] border hover:border-[#333] font-[900] text-[16px] leading-[24px] rounded-sm',
            className
          )}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? ''} legacyBehavior>
        <a className="hover:no-underline">
          <span
            className={classnames(
              'bg-black hover:bg-white px-8 py-2 max-w-fit text-white hover:text-[#333] border hover:border-[#333] transition font-[900] text-[16px] leading-[24px] rounded-sm',
              className
            )}
          >
            {children}
          </span>
        </a>
      </Link>
    );
  }
  return (
    <button
      className={classnames(
        'bg-black hover:bg-white transition px-8 py-2 max-w-fit text-white hover:text-[#333] border hover:border-[#333] font-[900] text-[16px] leading-[24px] rounded-sm',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
