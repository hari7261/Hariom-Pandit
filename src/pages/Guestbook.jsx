import GiscusComponent from "../components/GiscusComponent";
import SecondaryPara from "../ui/SecondaryPara";
import SectionHeading from "../ui/SectionHeading";
import GithubActivity from "../components/GithubActivity";
import GithubStats from "../components/GithubStats";

export default function Guestbook() {
  return (
    <div
      id="guestBook"
      className="relative z-10 mx-auto space-y-5 px-5 py-10 text-white md:px-10 lg:px-20"
    >
      <SectionHeading>My Github Contributions and Stats</SectionHeading>
      <SecondaryPara classname="text-xl">
        Leave a message in Guscus {`(>_<)`}
      </SecondaryPara>
      <GithubActivity />
      <GithubStats />
      <GiscusComponent />

    </div>
  );
}
