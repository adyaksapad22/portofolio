import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Product Management",
    description:
      "I bridge business goals, user needs, and technology by conducting market research, defining product requirements, prioritizing features, and collaborating with cross-functional teams to deliver impactful digital products.",
  },
  {
    id: 2,
    title: "Data Analytics",
    description:
      "I transform data into actionable insights through analysis, dashboard development, and performance tracking, helping organizations make informed and data-driven decisions.",
  },
  {
    id: 3,
    title: "Business Strategy",
    description:
      "I identify growth opportunities, evaluate business performance, and support strategic initiatives through market research, stakeholder collaboration, and analytical problem-solving.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Areas of Expertise</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            My experience spans product management, data analytics, and business
            strategy, allowing me to approach challenges from both technical and
            business perspectives.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I enjoy transforming insights into action, collaborating with teams,
            and building solutions that create measurable value for users and
            organizations.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
