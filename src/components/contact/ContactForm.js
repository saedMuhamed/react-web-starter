import Button from "../reusable/Button";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-primary-dark dark:bg-primary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-light dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <div className="font-general-regular">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-gray-4	00 rounded-md shadow-sm text-md"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-white rounded-md shadow-sm text-md"
              id="email"
              name="email"
              type="text"
              required
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-white  rounded-md shadow-sm text-md"
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Subject"
              aria-label="Subject"
            />
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-white  rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white dark:text-black hover:text-white dark: text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light hover:bg-primary-dark focus:ring-1 focus:ring-primary-light rounded-lg mt-6 duration-500">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
