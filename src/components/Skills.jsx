import { useState } from "react";
import {
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMysql,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

import {
  MdApi,
  MdOutlinePsychology,
} from "react-icons/md";

import { BsBox } from "react-icons/bs";

const categories = {
  backend: [
    {
      name: "Java",
      value: 80,
      icon: <FaJava className="text-orange-500" />,
    },
    {
      name: "Node.js",
      value: 85,
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "REST APIs",
      value: 85,
      icon: <MdApi className="text-sky-400" />,
    },
    {
      name: "SQL",
      value: 85,
      icon: <SiMysql className="text-cyan-500" />,
    },
  ],

  frontend: [
    {
      name: "HTML5",
      value: 95,
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS3",
      value: 95,
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      value: 90,
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    {
      name: "Python",
      value: 90,
      icon: <FaPython className="text-blue-400" />,
    },
  ],

  tools: [
    {
      name: "OOPs & Data Structures",
      value: 80,
      icon: <BsBox className="text-blue-400" />,
    },
    {
      name: "Problem Solving",
      value: 85,
      icon: <MdOutlinePsychology className="text-yellow-400" />,
    },
    {
      name: "Git & GitHub",
      value: 90,
      icon: <FaGitAlt className="text-orange-500" />,
    },
    {
      name: "VS Code & IDEs",
      value: 90,
      icon: <FaCode className="text-blue-500" />,
    },
  ],
};

export default function Skills() {
  const [active, setActive] = useState("backend");

  return (
    <section
      id="skills"
      className="py-12 lg:py-18 bg-[#0f1118] text-white min-h-screen"
    >
      <div className="max-w-6xl w-full mx-auto px-5 lg:px-6 py-12">

        {/* Heading */}

        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Technical Skills
        </h2>

        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 mx-auto mt-6 mb-10"></div>
        {/* Buttons */}

        <div className="flex justify-center flex-wrap gap-3 mb-10">

          <button
            onClick={() => setActive("backend")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition
            ${
              active === "backend"
                ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30"
                : "border border-gray-700 hover:bg-orange-500"
            }`}
          >
            Backend & DB
          </button>

          <button
            onClick={() => setActive("frontend")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition
            ${
              active === "frontend"
                ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30"
                : "border border-gray-700 hover:bg-orange-500"
            }`}
          >
            Frontend & Lang
          </button>

          <button
            onClick={() => setActive("tools")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition
            ${
              active === "tools"
                ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30"
                : "border border-gray-700 hover:bg-orange-500"
            }`}
          >
            Core Concepts & Tools
          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-5">

          {categories[active].map((skill) => (

            <div
              key={skill.name}
              className="rounded-2xl border border-gray-700 bg-[#171a22] p-5 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10"
            >

              <div className="flex justify-between items-center mb-4">

                <div className="flex items-center gap-3">

                  <span className="text-2xl">
                    {skill.icon}
                  </span>

                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>

                </div>

                <span className="font-semibold text-sm text-gray-300">
                  {skill.value}%
                </span>

              </div>

              <div className="h-2 rounded-full bg-[#2a2d37] overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
                  style={{ width: `${skill.value}%` }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}