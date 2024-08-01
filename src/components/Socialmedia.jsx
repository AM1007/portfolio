import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD/",
    icon: BsYoutube,
    target: "_blank",
  },
  { title: "GitHub", href: "https://github.com/noorjsdivs/", icon: BsGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Noorlalu143/",
    icon: BsFacebook,
    target: "_blank",
  },
  {
    title: "Instagram",
    href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
    icon: BsLinkedin,
    target: "_blank",
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: BsTwitter,
    target: "_blank",
  },
];

export const SocialMedia = ({ className, invert = false }) => {
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
