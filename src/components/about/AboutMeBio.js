import profileImage from "../../images/profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-2 sm:mt-20">
      <div className="font-LoveFebruary w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-32  text-primary-dark dark:text-primary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
      <div className="w-full sm:w-1/4 md:w-24 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-xl w-96" alt="" />
      </div>
    </div>
  );
};

export default AboutMeBio;
