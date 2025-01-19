import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../ui/SectionHeading";

const projectData = [
  {
    image: "/src/assets/youtube.png",
    heading: "YouTube Clone",
    desc: "A simple YouTube clone built with React, offering a user-friendly interface for browsing and watching videos.",
    githubLink: "https://github.com/hari7261/Youtube-Clone",
    liveLink: "https://simple-youtube-clone-nine.vercel.app/",
    githubText: "hari7261/Youtube-Clone",
    linkLinkText: "simple-youtube-clone-nine.vercel.app",
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Z4T8ZeuOmCoEZFnvWwjyyA.png",
    heading: "Netflix Clone",
    desc: "A Netflix clone built with React, featuring a sleek design and seamless video playback.",
    githubLink: "https://github.com/hari7261/NetflixClone-",
    liveLink: "https://netflix-cllone.vercel.app/",
    githubText: "hari7261/NetflixClone-",
    linkLinkText: "netflix-cllone.vercel.app",
  },
  {
    image: "/src/assets/video.png",
    heading: "VideoTalk",
    desc: "A video chat application enabling real-time communication with friends and colleagues.",
    githubLink: "https://github.com/hari7261/VideoTalk",
    liveLink: "https://vid-talk.vercel.app/",
    githubText: "hari7261/VideoTalk",
    linkLinkText: "vid-talk.vercel.app",
  },
  {
    image: "/src/assets/githubwarped.png",
    heading: "GitHub Wrapped",
    desc: "A tool to visualize your GitHub activity and contributions in a fun and interactive way.",
    githubLink: "https://github.com/hari7261/GitHubWrapped",
    liveLink: "https://github-wrapped-peach.vercel.app/",
    githubText: "hari7261/GitHubWrapped",
    linkLinkText: "github-wrapped-peach.vercel.app",
  },
  {
    image: "/src/assets/chatbot.png",
    heading: "GenAI Bot",
    desc: "A chatbot powered by Gemini AI, offering intelligent and conversational responses.",
    githubLink: "https://github.com/hari7261/GenAI-Bot",
    liveLink: "https://gemini-chatbot-phi-sage.vercel.app/",
    githubText: "hari7261/GenAI-Bot",
    linkLinkText: "gemini-chatbot-phi-sage.vercel.app",
  },
  {
    image: "/src/assets/canavas.png",
    heading: "CodeCanvas",
    desc: "A text-based code editor with real-time rendering and syntax highlighting.",
    githubLink: "https://github.com/hari7261/CodeCanvas",
    liveLink: "https://text-code-canvas.vercel.app/",
    githubText: "hari7261/CodeCanvas",
    linkLinkText: "text-code-canvas.vercel.app",
  },
  {
    image: "/src/assets/advancedweather.png",
    heading: "Advanced Weather App",
    desc: "A weather application providing detailed forecasts and real-time weather updates.",
    githubLink: "https://github.com/hari7261/AdvancedWeatherApp",
    liveLink: "https://advanced-weather-five.vercel.app/",
    githubText: "hari7261/AdvancedWeatherApp",
    linkLinkText: "advanced-weather-five.vercel.app",
  },
  {
    image: "/src/assets/resumebuilder.png",
    heading: "Resume Builder Web System",
    desc: "A web-based resume builder that allows users to create, customize, and download professional resumes.",
    githubLink: "https://github.com/hari7261/Resume-Builder-Web-System",
    liveLink: "https://resume-builder-web-system.vercel.app/",
    githubText: "hari7261/Resume-Builder-Web-System",
    linkLinkText: "resume-builder-web-system.vercel.app",
  },
  {
    image: "/src/assets/typing.png",
    heading: "Typing Test",
    desc: "A typing speed assessment tool that helps users improve their typing speed and accuracy.",
    githubLink: "https://github.com/hari7261/Typing-Test",
    liveLink: "https://typing-assessments.vercel.app/",
    githubText: "hari7261/Typing-Test",
    linkLinkText: "typing-assessments.vercel.app",
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:636/format:webp/1*vKBsFlAM35KwtaI6nDakxg.png",
    heading: "NLP Translator",
    desc: "A language translation tool built using Python and CustomTkinter, supporting auto-translate and manual translate modes.",
    githubLink: "https://github.com/hari7261/NLP-Translator",
    liveLink: "#",
    githubText: "hari7261/NLP-Translator",
    linkLinkText: "N/A",
  },
  {
    image: "https://user-images.githubusercontent.com/51138087/93668051-f7c4af00-fa3e-11ea-9b17-5913e954795f.png",
    heading: "AuraVoice",
    desc: "A voice assistant built using Python, integrating speech recognition, text-to-speech, and system-level functionalities.",
    githubLink: "https://github.com/hari7261/AuraVoice",
    liveLink: "#",
    githubText: "hari7261/AuraVoice",
    linkLinkText: "N/A",
  },
  {
    image: "https://user-images.githubusercontent.com/15319503/115972543-04513e80-a51d-11eb-8466-5f460b3cb1e0.png?raw=true",
    heading: "Data Visualization App",
    desc: "A Python-based app for real-time data visualization and analysis using Matplotlib and CustomTkinter.",
    githubLink: "https://github.com/hari7261/Data-Visualization",
    liveLink: "#",
    githubText: "hari7261/Data-Visualization",
    linkLinkText: "N/A",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="z-10 mt-10 flex flex-col gap-5 px-5 py-10 font-nunito-sans text-white md:px-10 lg:px-20"
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            heading={project.heading}
            desc={project.desc}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            githubText={project.githubText}
            linkLinkText={project.linkLinkText}
          />
        ))}
      </div>
    </section>
  );
}