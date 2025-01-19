import toast from "react-hot-toast";
import MyImage from "../assets/about-sec-image.jpeg";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="z-10 mt-10 flex flex-col-reverse items-center justify-center gap-10 px-5 py-10 font-nunito-sans text-white sm:flex-row sm:items-start md:justify-between md:px-10 lg:px-20"
    >
      {/* Left Section: Text Content */}
      <div className="flex flex-col gap-6 sm:max-w-lg lg:max-w-xl">
        <SectionHeading classname="hidden sm:block">About Me</SectionHeading>

        <h1 className="text-center font-sen text-3xl font-bold leading-tight text-white sm:text-left lg:text-4xl">
          Hey, I'm Hariom!{" "}
          <span className="gradient-text">A Developer with a Vision</span>
        </h1>

        <p className="text-pretty text-center text-base leading-relaxed tracking-wide opacity-85 sm:text-left lg:text-lg">
          I'm a passionate Software Developer based in India, turning ideas into
          reality through code. With a love for problem-solving and a knack for
          building scalable, user-friendly applications, I specialize in
          <span className="font-semibold text-purple-400">
            {" "}
            JavaScript, React, Node.js, and Python
          </span>
          . Whether it's crafting seamless user experiences or diving into the
          latest tech trends, I'm always up for a challenge.
        </p>

        <p className="hidden text-pretty text-center text-base leading-relaxed tracking-wide opacity-85 sm:block sm:text-left lg:text-lg">
          I believe in the power of continuous learning and growth. Every line of
          code I write is a step towards creating something meaningful and
          impactful. Let's build the future together!
        </p>

        {/* Resume Button */}
        {/* <div className="mt-4 flex justify-center gap-4 sm:justify-start">
          <a
            href="https://drive.google.com/file/d/1lgTrPYakFMlFKmEM6oaJNCjeWVDknLj6/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-md bg-purple-600 px-6 py-2 text-lg font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <button
            onClick={() => toast.error("Feature yet to be complete")}
            className="rounded-md border border-purple-600 px-6 py-2 text-lg font-semibold text-purple-600 transition-all duration-300 hover:bg-purple-600 hover:text-white"
          >
            Contact Me
          </button>
        </div> */}
      </div>

      {/* Right Section: Image */}
      <div className="flex max-w-sm flex-col gap-5 sm:self-end lg:self-start">
        <img
          src="https://avatars.githubusercontent.com/u/138400713?s=400&u=f87dd2999dfe17cac49a5417cf5f854cb2a52bd3&v=4"
          loading="lazy"
          alt="Hariom Pandit"
          className="max-h-96 rounded-2xl border-2 border-purple-600 shadow-lg"
        />
      </div>

      {/* Mobile Section Heading */}
      <SectionHeading classname="sm:hidden block">About Me</SectionHeading>
    </section>
  );
}