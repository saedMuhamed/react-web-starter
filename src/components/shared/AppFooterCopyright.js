function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-primary-dark dark:text-primary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/saedMuhamed"
          target="__blank"
          className="hover:underline hover:text-primary-dark dark:hover:text-primary-light ml-1 duration-500"
        >
          A stunning portfolio created by
        </a>
        .
        <a
          href="https://github.com/saedMuhamed"
          target="__blank"
          className="text-light-dark dark:text-primary-light font-medium uppercase hover:underline hover:text-primary-light dark:hover:text-primary-dark ml-1 duration-500"
        >
          Saed
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
