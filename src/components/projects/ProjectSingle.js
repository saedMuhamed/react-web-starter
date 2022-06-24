import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to="/projects/single-project" aria-label="Single Project">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-primary-dark dark:bg-primary-light">
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-primary-light dark:text-primary-dark mb-2">
              {title}
            </p>
            <span className="text-lg text-primary-light dark:text-primary-dark">
              {category}
            </span>
          </div>
          <div>
            <img
              src={image}
              className="rounded-xl border-none"
              alt="Single Project"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
