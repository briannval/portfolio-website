import Hero from "./hero";

const VideoBackground = () => {
  return (
    <div className="h-full w-full flex relative flex-col">
      <video autoPlay muted loop className="absolute w-full h-full">
        <source src="/static/background.mp4" />
      </video>
      <Hero />
    </div>
  );
};

export default VideoBackground;
