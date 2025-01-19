import { LiaGithub } from "react-icons/lia";
import { MdInsertLink } from "react-icons/md";

export default function ProjectItem({
  image,
  heading,
  desc,
  githubLink,
  liveLink,
  githubText,
  linkLinkText,
}) {
  return (
    <div className="border-tertiary bg-bg-secondary/50 hover:bg-bg-secondary/70 nav-bar-1 flex flex-col overflow-hidden rounded-2xl border-[0.8px] p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
      <div className="samp relative h-48 w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt="project image"
          className="h-full w-full rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col justify-between gap-4">
        <div>
          <h1 className="font-sen text-2xl font-bold text-white">{heading}</h1>
          <p className="mt-2 text-sm opacity-80 sm:text-base">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-4 opacity-80">
          <div className="flex items-center gap-2">
            <MdInsertLink className="text-2xl" />
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-base hover:text-white hover:opacity-100"
            >
              <span className="hidden sm:inline">{linkLinkText}</span>
              <span className="sm:hidden">Live Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 inline h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LiaGithub className="text-2xl" />
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-base hover:text-white hover:opacity-100"
            >
              <span className="hidden sm:inline">{githubText}</span>
              <span className="sm:hidden">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 inline h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}