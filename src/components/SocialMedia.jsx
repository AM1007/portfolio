import Link from "next/link";
import clsx from "clsx";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/motko/",
    icon: FaLinkedinIn,
    target: "_blank",
  },
  {
    title: "GitHub",
    href: "https://github.com/AM1007",
    icon: BsGithub,
    target: "_blank",
  },
  {
    title: "Telegram",
    href: "https://t.me/Cookie_Cap",
    icon: FaTelegramPlane,
    target: "_blank",
  },
  {
    title: "Twitter",
    href: "https://x.com/AndrewMotk5150",
    icon: FaXTwitter,
    target: "_blank",
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
