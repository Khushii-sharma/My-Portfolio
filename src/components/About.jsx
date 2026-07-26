import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaLightbulb,
  FaPeopleCarry,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#050505] py-20 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>

          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
        </motion.div>

        {/* Main Grid */}

        <div className="mt-14 grid lg:grid-cols-[1.7fr_1fr] gap-8">

          {/* LEFT CARD */}

          <motion.div
            whileHover={{ y: -5 }}
            className="cursor:text rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-300 bg-[#111319] p-8"
          >
            <p className="text-[15px] leading-8 text-gray-300">

              I'm B.Tech graduate in Electronics & Communication Engineering from the Central University of Karnataka (CGPA: 9.02).
              During my college journey, I developed a strong interest in software development and built my skills in <span className="text-white">Java, Python, SQL, JavaScript, React.js, and Next.js.</span>
              I completed a Frontend Developer Internship where I worked on responsive user interfaces, REST API integration, JWT authentication, and reusable components.
              I'm passionate about learning new technologies, solving coding challenges, and building practical software solutions. I'm currently looking for an opportunity where I can contribute, learn, and grow as a Software Engineer.

            </p>

            {/* Info */}

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mt-12">

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Name
                </p>

                <h4 className="mt-2 text-white font-medium">
                  Khushi Kumari
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Role
                </p>

                <h4 className="mt-2 text-white font-medium">
                  Software Developer
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Education
                </p>

                <h4 className="mt-2 text-white font-medium">
                  B.Tech (ECE)
                </h4>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Location
                </p>

                <h4 className="mt-2 text-white font-medium">
                  Bangalore, India
                </h4>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="grid gap-6">

            <AboutCard
              icon={<FaLaptopCode />}
              title="Quick Learner"
              className="cursor-text"
              text="Adapt quickly to new technologies and enjoy exploring modern software development."
            />

            <AboutCard
              icon={<FaLightbulb />}
              title="Problem Solver"
              className="cursor-text"
              text="Love solving coding challenges and building practical solutions through projects."
            />

            {/* <AboutCard
              icon={<FaPeopleCarry />}
              title="Team Player"
              text="Worked closely with backend developers during my internship and enjoy collaborative development."
            />

            <AboutCard
              icon={<FaUserGraduate />}
              title="Continuous Growth"
              text="Always improving my skills by learning new technologies and building real-world projects."
            /> */}

          </div>

        </div>

      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, text }) => {

  return (

    <motion.div
      whileHover={{
        y: -5,
      }}
      className="rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 bg-[#111319] p-6"
    >

      <div className="text-orange-500 text-2xl mb-5">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-400">
        {text}
      </p>

    </motion.div>

  );

};

export default About;