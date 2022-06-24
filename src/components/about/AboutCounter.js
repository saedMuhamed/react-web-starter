import { useCountUp } from "react-countup";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 12, duration: 2 });
  useCountUp({ ref: "githubStarsCounter", end: 20, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 92, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 77, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-dark dark:bg-primary-light shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-primary-light dark:text-primary-dark mb-2">
            <span id="experienceCounter" />
          </h2>
          <span className="font-general-regular block text-md text-center text-primary-light dark:text-primary-dark">
            Years of experience
          </span>
        </div>

        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-primary-light dark:text-primary-dark mb-2">
            <span id="githubStarsCounter" />
            k+
          </h2>
          <span className="font-general-regular block text-md text-center dark:text-primary-dark text-primary-light ">
            Stars on GitHub
          </span>
        </div>

        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-primary-light dark:text-primary-dark mb-2">
            <span id="feedbackCounter" /> %
          </h2>
          <span className="font-general-regular block text-md text-center text-primary-light dark:text-primary-dark">
            Positive feedback
          </span>
        </div>

        <div className="mb-20 sm:mb-0">
          <h2 className="text-4xl text-center text-primary-light dark:text-primary-dark mb-2">
            <span id="projectsCounter" /> %
          </h2>
          <span className="font-general-regular block text-md text-center text-primary-light dark:text-primary-dark ">
            Projects completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
