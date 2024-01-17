"use client";

const VideoBackground = () => {
  return (
    <>
      <video autoPlay muted loop className="absolute w-full">
        <source src="/static/background.mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
