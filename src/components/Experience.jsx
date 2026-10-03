import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timeline = [
  {
    type: "work",
    date: "April 2026 — Present",
    title: "Full Stack Web Developer Intern",
    company: "KodNest • Bangalore",
    badge: "Internship",
    description: [
      "Engineered full-stack web features using Python, Django, React, and JavaScript.",
      "Developed RESTful API endpoints and interactive React components for real-time data interaction.",
      "Conducted UI debugging and frontend performance tuning using modern browser DevTools.",
      "Utilized Git for version control and collaborative code management in an agile team environment."
    ],
    skills: [
      "Python",
      "Django",
      "React.js",
      "JavaScript",
      "REST APIs",
      "HTML5 / CSS3",
      "Git"
    ]
  },
  {
    type: "work",
    date: "September 2025 — February 2026",
    title: "Frontend Developer Intern",
    company: "Lux Loom Fashion Pvt. Ltd. • Noida",
    badge: "Internship",
    description: [
      "Built responsive and reusable UI components using React.js and Tailwind CSS.",
      "Integrated REST APIs using Axios for seamless frontend-backend communication.",
      "Implemented JWT authentication and protected routes.",
      "Collaborated with backend developers to deliver production-ready features."
    ],
    skills: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "JWT",
      "Tailwind CSS",
      "Git"
    ]
  },

  {
    type: "education",
    date: "2021 — 2025",
    title: "B.Tech • Electronics & Communication Engineering",
    company: "Central University of Karnataka",
    badge: "Education",
    description: [,
      "Developed strong software development skills through self-learning and projects.",
      "Worked on Java, Python, SQL, React.js, Next.js and problem solving."
    ],
    skills: [
      "CGPA 9.02",
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050505] text-white py-16 lg:min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}

        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Experience & Education
        </h2>

        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mt-5 mb-14"></div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-[15px]
            top-4
            bottom-12
            w-[2px]
            rounded-full
            bg-gradient-to-b
            from-orange-400
            via-orange-500
            to-orange-600
            "
            />

          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item relative flex gap-6 mb-8 last:mb-0"
            >

              {/* Left Side */}

              <div className="relative z-10 flex flex-col items-center">

                {/* Circle */}

                <div
                  className="
                  timeline-circle
                  w-6
                  h-6
                  rounded-full
                  border-2
                  border-orange-500
                  bg-[#0f1118]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  "
                >

                  {item.type === "work" ? (
                    <FaBriefcase
                      className="
                      timeline-icon
                      text-orange-400
                      text-xs
                      transition-all
                      duration-500
                      "
                    />
                  ) : (
                    <FaGraduationCap
                      className="
                      timeline-icon
                      text-orange-400
                      text-xs
                      transition-all
                      duration-500
                      "
                    />
                  )}

                </div>

              </div>

              {/* Right Side */}

              <div className="flex-1">

                {/* Date */}

                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  font-semibold
                  text-orange-400
                  mb-3
                  "
                >
                  {item.date}
                </p>

                {/* Card */}

                <div
                    className="
                    experience-card
                    rounded-xl
                    border
                    border-gray-700
                    bg-[#171a22]
                    p-5
                    lg:p-6
                    transition-all
                    duration-500
                    hover:border-orange-500
                    "
                >

                  {/* Top */}

                  <div className="flex flex-wrap justify-between gap-4">

                    <div>

                      <h3 className="text-lg md:text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-[14px] mt-1">
                        {item.company}
                      </p>

                    </div>

                    <span
                      className="
                      rounded-full
                      border
                      border-orange-500/25
                      bg-orange-500/10
                      text-orange-400
                      text-xs
                      px-4
                      py-1.5
                      h-fit
                      "
                    >
                      {item.badge}
                    </span>

                  </div>

                  {/* Description */}

                  <ul className="mt-4 space-y-2 text-sm md:text-[15px] leading-7 text-gray-300">

                    {item.description.map((line, i) => (

                      <li key={i}>
                        • {line}
                      </li>

                    ))}

                  </ul>

                  {/* Skills */}

                  <div className="flex flex-wrap gap-2 mt-5">

                    {item.skills.map((skill) => (

                      <span
                        key={skill}
                        className="
                        text-xs
                        rounded-md
                        border
                        border-gray-700
                        bg-[#20242d]
                        px-3
                        py-1.5
                        transition-all
                        duration-300
                        "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}