import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Bandung, Indonesia",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "adyaksapadmanabha@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+62 852-8336-9742",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="content py-20 px-4 text-center "
    >
      <h2 className="section-title mb-6">
        Contact Me
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Feel free to reach out for opportunities, collaborations,
        or professional discussions in Product Management,
        Data Analytics, and Business Strategy.
      </p>

      <div className="space-y-4 text-lg">
        <p>📍 Bandung, Indonesia</p>
        <p>📧 adyaksapadmanabha@gmail.com</p>
        <p>📱 +62 852-8336-9742</p>
      </div>
    </section>
  );
};

export default Contact;
