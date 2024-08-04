import clsx from "clsx";

const Button = ({
  invert,
  href,
  className,
  children,
  download,
  sameTab,
  ...props
}) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition w-[124px] flex align-middle justify-center",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );

  return (
    <a
      href={href}
      className={className}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
