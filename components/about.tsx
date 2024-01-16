import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";

const About = () => {
  return (
    <SecondaryWrapper>
      <div className="h-full w-full flex flex-col gap-10 py-10 px-10 justify-center m-auto text-start">
        <h1 className="text-white text-6xl font-mono relative">About Page</h1>
      </div>
    </SecondaryWrapper>
  );
};

export default About;