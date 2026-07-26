import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleActiveSection = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleActiveSection);

    return () =>
      window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Me", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Project", href: "#project", id: "project" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30"
            : "bg-[#050505]"
        }`}
      >
        <div className="max-w-7xl mx-auto h-[75px] px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#home">
            <h1 className="cursor-pointer text-2xl lg:text-3xl font-bold tracking-wider bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              KHUSHI
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((item) => (
              <li key={item.name} className="group">
                <a
                  href={item.href}
                  className={`relative text-[14px] lg:text-[15px] font-medium transition duration-300 ${
                    active === item.id
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-orange-500 transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40"
          >
            Get In Touch
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer lg:hidden text-white hover:text-orange-500 transition"
          >
            <HiOutlineMenuAlt3 size={38} />
          </button>

        </div>
      </nav>

      {/* ================= Overlay ================= */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* ================= Mobile Drawer ================= */}

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[80%] max-w-[340px] bg-[#0d0d0d] transform transition-transform duration-500 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}

        <div className="flex h-[85px] items-center justify-between border-b border-white/10 px-6">

          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer text-white hover:text-orange-500 transition duration-300"
          >
            <HiX size={34} />
          </button>

        </div>

        {/* Drawer Links */}

        <ul className="flex h-[60vh] flex-col items-center justify-center gap-6">

          {navLinks.map((item) => (
            <li key={item.name} className="group">
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`relative inline-block text-lg font-medium transition duration-300 ${
                  active === item.id
                    ? "text-orange-500"
                    : "text-white hover:text-orange-500"
                }`}
              >
                {item.name}

                {active === item.id && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[3px] w-full rounded-full bg-orange-500"></span>
                )}
              </a>
            </li>
          ))}

        </ul>

        {/* Bottom Button */}

        <div className="absolute bottom-6 left-0 w-full px-8">

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 py-3 text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40"
          >
            Get In Touch
          </a>

        </div>

      </div>
    </>
  );
};

export default Navbar;