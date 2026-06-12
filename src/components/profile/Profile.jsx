import person from "../../assets/images/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Information Systems & Technology Student at ITB
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              I am an Information Systems and Technology student at Institut
              Teknologi Bandung (ITB) with strong interests in Product Management,
              Data Analytics, and Digital Business. I have gained hands-on
              experience through multiple internships across technology, fintech,
              e-commerce, and consulting industries.
            </p>
            <p className="mt-3">
              Passionate about leveraging data and technology to create impactful
              digital solutions, I enjoy collaborating with cross-functional teams,
              conducting market research, and transforming insights into
              user-centered products that deliver measurable business value.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="https://github.com/adyaksapad22"
            >
              My Projects
            </a>
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-blue-400 bg-white duration-300 transition-all hover:text-blue-400 ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
              href="/cv/Padmanabha_Resume.pdf"
              download
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
