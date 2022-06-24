import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Hagiesa, Somaliland",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "saed-xabo@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "+252 (63) 4026056",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-primary-dark dark:text-primary-light mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-primary-dark dark:text-primary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
