import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  HiOutlineCodeBracketSquare,
} from "react-icons/hi2";

const projects = [
  {
    category: "FULL STACK",
    title: "InternTrack",

    github: "https://github.com/Khushii-sharma/InternTrack",
    live: "https://intern-track-iota.vercel.app/",

    description:
      "Built a full-stack job application tracker using React, Node.js, Express.js, and MongoDB featuring JWT authentication, application CRUD operations, search and filtering, interview round tracking, follow-up reminders, and responsive UI.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios",
      "Tailwind CSS",
    ],
  },

  {
    category: "FULL STACK",
    title: "BiteRush",

    github: "https://github.com/Khushii-sharma/BiteRush",
    live: "https://biterush-im3b.onrender.com/",

    description:
      "Built a full-stack food delivery web application using Python, Django, and JavaScript featuring user profile management, vendor dashboards, dynamic menu CRUD operations, order history tracking, and mobile-responsive UI templates.",

    tech: [
      "Python",
      "Django",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Django ORM",
      "SQLite",
    ],
  },

  {
    category: "FRONTEND",
    title: "Recipe Diary",

    github: "https://github.com/Khushii-sharma/Recipe-Diary",
    live: "https://recipe-diary-topaz.vercel.app/",

    description:
      "Developed a modern recipe application using Next.js and Tailwind CSS featuring recipe search, protected saved recipes, simulated OTP authentication, URL sharing, detailed cooking guides, and YouTube integration using Context API and TheMealDB API.",

    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "Context API",
      "Axios",
      "TheMealDB API",
    ],
  },

  {
    category: "FRONTEND",
    title: "EdTech Quiz App",

    github: "https://github.com/Khushii-sharma/quiz-app",
    live: "https://quiz-app-blond-omega-48.vercel.app/",

    description:
      "Built a responsive quiz platform using Next.js featuring countdown timers, subject-wise quizzes, performance analytics, instant feedback, API integration with TanStack Query and Axios, and an engaging responsive interface.",

    tech: [
      "Next.js",
      "React",
      "TanStack Query",
      "Axios",
      "Tailwind",
      "REST API",
    ],
  },

  {
    category: "PYTHON / AI",
    title: "Smart Resume Matcher",

    github: "https://github.com/Khushii-sharma/smart-resume-matcher",
    live: "https://smart-resume-matcher-vxk3wvh9mqch7m2ypfjtwv.streamlit.app/",

    description:
    "Built an AI-powered web application using Python, Google Gemini API, and Streamlit to automatically analyze resume PDFs against job descriptions, extract structured match scores, highlight missing skill gaps, and provide actionable optimization feedback.",

    tech: [
    "Python",
    "Google Gemini API",
    "Streamlit",
    "PyMuPDF",
    "Pydantic",
    "JSON / REST APIs",
    "Git",
    ],
  },
];

export default function Project() {
  return (
    <section
      id="project"
      className="
      bg-[#0f1118]
      text-white

      py-16
      lg:min-h-screen

      flex
      items-center
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        w-full
        px-6
        "
      >
        {/* Heading */}

        <h2
          className="
          text-center
          text-3xl
          md:text-4xl
          font-bold
          "
        >
          Featured Projects
        </h2>

        <div
          className="
          w-20
          h-1
          rounded-full

          bg-gradient-to-r
          from-orange-400
          via-orange-500
          to-orange-600

          mx-auto
          mt-5
          mb-12
          "
        />

        {/* Project Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group

              rounded-2xl

              border
              border-gray-700

              bg-[#171a22]

              p-6

              transition-all
              duration-500

              hover:border-orange-500
              hover:bg-[#1a1f2a]
              hover:-translate-y-1
              hover:shadow-[0_15px_45px_rgba(255,140,0,0.08)]
              "
            >
                              {/* Top Row */}

              <div className="flex items-start justify-between mb-6">

                <div>

                  <div className="flex items-center gap-2">

                    <HiOutlineCodeBracketSquare
                      className="text-orange-400 text-sm"
                    />

                    <span
                      className="
                      text-orange-400
                      text-xs
                      font-semibold
                      tracking-[2px]
                      uppercase
                      "
                    >
                      {project.category}
                    </span>

                  </div>

                  <h3
                    className="
                    mt-5
                    text-2xl
                    font-bold

                    transition-colors
                    duration-300

                    group-hover:text-orange-300
                    "
                  >
                    {project.title}
                  </h3>

                </div>

                {/* Github */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-11
                  h-11

                  rounded-full

                  border
                  border-gray-700

                  bg-[#20242d]

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300

                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:text-black
                  hover:rotate-12
                  hover:scale-110
                  "
                >
                  <FaGithub className="text-lg" />
                </a>

              </div>

              {/* Description */}

              <p
                className="
                text-gray-300
                leading-8
                text-[15px]
                "
              >
                {project.description}
              </p>

              {/* Technologies */}

              <div
                className="
                flex
                flex-wrap
                gap-2
                mt-7
                "
              >

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="
                    text-xs

                    px-3
                    py-1.5

                    rounded-md

                    border
                    border-gray-700

                    bg-[#20242d]

                    transition-all
                    duration-300

                    hover:border-orange-500
                    hover:bg-orange-500/10
                    hover:text-orange-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Bottom Buttons */}

              <div
                className="
                flex
                items-center
                justify-between

                mt-8
                "
              >

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2

                  text-orange-400
                  font-medium

                  transition-all
                  duration-300

                  hover:text-orange-300

                  group/link
                  "
                >

                  Live Demo

                  <FaExternalLinkAlt
                    className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                    "
                  />

                </a>


              </div>

            </div>
                      ))}
        </div>
      </div>
    </section>
  );
}