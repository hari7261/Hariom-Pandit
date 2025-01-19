import PrimaryButton from "../ui/PrimaryButton";
import SecondaryPara from "../ui/SecondaryPara";
import SparklesIconButton from "../ui/SparklesIconButton";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      <SparklesIconButton>
        Hey I'm <span className="font-semibold">Hariom Kumar Pandit</span>
      </SparklesIconButton>

      <div className="text-center font-sen text-[28px] font-bold leading-tight text-white xs:text-[34px] sm:text-left sm:text-4xl md:text-[38px] md:leading-[1.3]  lg:text-[54px]">
        <span className="gradient-text">Software Developer</span>
        <span className="block text-[22px] xs:text-[26px] md:text-[28px] lg:text-[38px]">
          Turning ideas into reality with code, creativity, and a dash of magic.
        </span>
      </div>

      <SecondaryPara classname="md:max-w-sm md:text-base lg:max-w-md lg:text-[18px]">
        I'm a versatile Software Developer who loves solving problems with code. Whether it's building scalable web applications with Node.js and JavaScript, diving into Machine Learning with Python, or crafting seamless user experiences, I bring passion and precision to every project. Let's create something extraordinary together!
      </SecondaryPara>

      <PrimaryButton
        btn={false}
        href="https://www.linkedin.com/in/hariom-kumar-pandit-2k3/"
        classname="lg:-mt-5 text-center"
      >
        Let's Connect
      </PrimaryButton>
    </div>
  );
}