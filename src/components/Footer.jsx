import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Logo */}

        {/* <div className="text-center">

          <h2 className="text-5xl font-extrabold tracking-tight">
            <span className="text-white">KHUSHI</span>
            <span className="text-orange-500">.</span>
          </h2>

          <p className="mt-5 text-gray-400 text-[15px] max-w-xl mx-auto leading-7">
            Passionate Frontend Developer building modern, responsive and
            user-friendly web applications with React.js, Next.js and
            JavaScript.
          </p>

        </div> */}

        {/* Divider */}

        {/* <div className="border-t border-gray-800 my-10"></div> */}

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Khushi Kumari. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">

            {/* Github */}

            <a
              href="https://github.com/Khushii-sharma"
              target="_blank"
              rel="noreferrer"
              className="
              w-11
              h-11
              rounded-full
              bg-[#171a22]
              border
              border-gray-700

              flex
              items-center
              justify-center

              text-lg
              text-gray-300

              transition-all
              duration-300

              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white
              hover:-translate-y-1
              hover:shadow-[0_0_18px_rgba(255,140,0,.25)]
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/khushi-sharma-691555263/"
              target="_blank"
              rel="noreferrer"
              className="
              w-11
              h-11
              rounded-full
              bg-[#171a22]
              border
              border-gray-700

              flex
              items-center
              justify-center

              text-lg
              text-gray-300

              transition-all
              duration-300

              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white
              hover:-translate-y-1
              hover:shadow-[0_0_18px_rgba(255,140,0,.25)]
              "
            >
              <FaLinkedinIn />
            </a>

            {/* Gmail */}

            <a
              href="mailto:sharmakhushi1501@gmail.com"
              className="
              w-11
              h-11
              rounded-full
              bg-[#171a22]
              border
              border-gray-700

              flex
              items-center
              justify-center

              text-lg
              text-gray-300

              transition-all
              duration-300

              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white
              hover:-translate-y-1
              hover:shadow-[0_0_18px_rgba(255,140,0,.25)]
              "
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}