import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#050505] pt-[110px] min-h-[92vh] overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-40 right-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-orange-600/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 min-h-[78vh] flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          {/* Availability Badge */}
          {/* <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 rounded-full px-5 py-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-orange-400 text-sm font-medium">
              Open for Frontend & Full-Time Roles
            </span>
          </div> */}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Khushi
            </span>
          </h1>

          {/* Typing Text */}
          <div className="mt-5 text-2xl sm:text-3xl font-semibold">
            I am a{" "}
            <span className="text-orange-500">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0">
            Frontend Developer passionate about creating responsive,
            user-friendly web applications using React, JavaScript,
            Tailwind CSS and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 text-[15px] font-medium rounded-full bg-gradient-to-r from-orange-600 to-orange-400 hover:scale-105 transition duration-300 shadow-lg shadow-orange-500/20"
            >
              View Projects
            </a>

            <a
              href="/Khushi_resume.pdf"
              download="Khushi_resume.pdf"
              className="px-6 py-3 text-[15px] font-medium rounded-full border border-gray-700 bg-[#111] hover:border-orange-500 transition flex items-center gap-2"
            >
              <FiDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-[15px] font-medium rounded-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://github.com/Khushii-sharma"
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-sharma-691555263/"
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:sharmakhushi1501@gmail.com"
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        >
          <div className="relative group perspective-[1200px]">

            {/* Orange Ring */}
            <div
              className="
                w-[220px]
                h-[220px]
                sm:w-[250px]
                sm:h-[250px]
                lg:w-[330px]
                lg:h-[330px]
                rounded-full
                border-[3px]
                border-[#2d2d2d]
                overflow-hidden
                transition-all
                duration-500
                ease-out
                group-hover:border-orange-500
                group-hover:-translate-y-2
                group-hover:scale-[1.03]
                group-hover:shadow-2xl
                group-hover:shadow-orange-500/20
              "
            >

              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="profile_pic.png"
                  alt="Khushi Kumari"
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{ objectPosition: "center 25%" }}

                />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;