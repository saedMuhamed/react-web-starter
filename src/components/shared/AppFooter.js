import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import AppFooterCopyright from "./AppFooterCopyright";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/saedMuhamed",
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: "https://twitter.com/saedmuhamed3",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/saed-mohomed",
  },
  {
    id: 4,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/saeed_mohomed/",
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-primary-dark">
        {/* Footer social links */}
        <div className="font-LoveFebruary flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-4xl sm:text-4xl text-primary-dark dark:text-primary-light mb-4 mt-4">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-primary-dark hover:text-primary-light dark:text-primary-light dark:hover:text-primary-dark cursor-pointer rounded-xl bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light shadow-sm p-4 duration-300"
              >
                <i className="text-xlrounded-full sm:text-2xl md:text-3xl">
                  {link.icon}
                </i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
