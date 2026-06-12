import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "WEB DEVELOPMENT",
    title: "Food Ordering Web Application",
    description:
      "Built a full-stack food ordering platform using React.js, Express.js, Firebase, and Docker with real-time order tracking and responsive user experience.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "UI-UX DESIGN",
    title: "Ganesha Map Navigation App",
    description:
      "Designed an interactive campus navigation application for ITB students and visitors through user research, personas, and user-centered design.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "WEB APPLICATION",
    title: "Virtual Physics Lab",
    description:
      "Developed an interactive virtual laboratory using HTML, CSS, JavaScript, and Canvas API to enhance learning through visual simulations.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "PRODUCT MANAGEMENT",
    title: "RackGuard Smart Library",
    description:
      "Managed product requirements, user flows, and feature prioritization for shopping experience and payment growth initiatives.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "DATA ANALYTICS",
    title: "Sales & Customer Analytics Dashboard",
    description:
      "Developed business dashboards and analyzed customer behavior data, contributing to data-driven product decisions and 2,500+ product sales.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Featured Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A collection of academic and technology projects showcasing my
            experience in product development, data-driven problem solving,
            web applications, and user-centered design.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/adyaksapad22"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
