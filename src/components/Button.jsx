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
      target={sameTab ? undefined : "_blank"}
      rel={sameTab ? undefined : "noopener noreferrer"}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;

// import Link from "next/link";
// import clsx from "clsx";

// const Button = ({ invert, href, className, children, download, ...props }) => {
//   className = clsx(
//     className,
//     "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition w-[124px] flex align-middle justify-center",
//     invert
//       ? "bg-white text-neutral-950 hover:bg-neutral-200"
//       : "bg-neutral-950 text-white hover:bg-neutral-800"
//   );

//   let inner = <span>{children}</span>;

//   if (href) {
//     return (
//       <Link href={href} className={className} download={download} {...props}>
//         {inner}
//       </Link>
//     );
//   }

//   return (
//     <button className={className} {...props}>
//       {inner}
//     </button>
//   );
// };

// export default Button;
