const AboutClientSingle = ({ title, image }) => {
  return (
    <>
      <img
        src={image}
        className="w-64 py-5 px-10 border bg-white border-primary-dark  dark:border-primary-light shadow-sm rounded-md mb-8 cursor-pointer"
        alt={title}
      />
    </>
  );
};

export default AboutClientSingle;
