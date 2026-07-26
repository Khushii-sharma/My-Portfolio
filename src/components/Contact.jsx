import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const contacts = [
  {
    title: "EMAIL",
    value: "sharmakhushi1501@gmail.com", 
    href: "mailto:sharmakhushi1501@gmail.com",
    icon: <FaEnvelope />,
  },

  {
    title: "PHONE",
    value: "+91 8789516665", 
    href: "tel:+918789516665",
    icon: <FaPhoneAlt />,
  },

  {
    title: "LINKEDIN",
    value: "linkedin.com/in/khushi-sharma-691555263",
    href: "https://www.linkedin.com/in/khushi-sharma-691555263/",
    icon: <FaLinkedinIn />,
  },

  {
    title: "GITHUB",
    value: "github.com/Khushii-sharma",
    href: "https://github.com/Khushii-sharma",
    icon: <FaGithub />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] text-white py-16 lg:min-h-screen flex items-center"
    >
      <div className="max-w-3xl mx-auto w-full px-6">

        {/* Heading */}

        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Get In Touch
        </h2>

        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mt-5 mb-12"></div>

        <div className="space-y-5">

          {contacts.map((item, index) => (

            <a
              key={index}
              href={item.href}
              target={
                item.href.startsWith("http")
                  ? "_blank"
                  : "_self"
              }
              rel="noreferrer"
              className="
              group

              flex
              items-center
              gap-5

              rounded-2xl

              border
              border-gray-700

              bg-[#171a22]

              p-5

              transition-all
              duration-500

              hover:border-orange-500
              hover:bg-[#1a1f2a]
              hover:-translate-y-1
              hover:shadow-[0_15px_45px_rgba(255,140,0,.08)]
              "
            >

              {/* Icon */}

              <div
                className="
                w-14
                h-14

                rounded-xl

                border
                border-gray-700

                bg-[#20242d]

                flex
                items-center
                justify-center

                text-xl
                text-orange-400

                transition-all
                duration-500

                group-hover:bg-orange-500
                group-hover:text-black
                group-hover:border-orange-500
                "
              >
                {item.icon}
              </div>

              {/* Text */}

              <div>

                <p
                  className="
                  text-xs

                  uppercase

                  tracking-[2px]

                  text-gray-400

                  font-semibold
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                  mt-1

                  text-lg

                  font-semibold

                  break-all

                  transition-colors
                  duration-300

                  group-hover:text-orange-300
                  "
                >
                  {item.value}
                </p>

              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}