import Facebook from "../assets/ic_facebook.svg";
import Instagram from "../assets/ic_instagram.svg";
import Language from "../assets/language.svg";
import Phone from "../assets/ic_phone.svg";

const ContactCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
      <img
        src="https://via.placeholder.com/200"
        alt="Clinic"
        className="w-full h-40 rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">Lorem Ipsum</h3>
      <p className="text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h4 className="text-md font-semibold">Contact Us</h4>
      <ul className="space-y-2 mt-2 text-sm">
        <li className="flex items-center">
          <img src={Phone} className="mr-4" alt="phone" />
          +963 123 456 789
        </li>
        <li className="flex items-center">
          <img src={Language} className="mr-4" alt="Language" />
          www.loremipsum.com
        </li>
        <li className="flex items-center">
          <img src={Facebook} className="mr-4" alt="facebook" />
          Facebook Page
        </li>
        <li className="flex items-center">
          <img src={Instagram} className="mr-4" alt="Instagram" />
          Instagram Page
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
