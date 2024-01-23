"use client";

const VideoBackground = () => {
  return (
    <>
      <video autoPlay muted loop className="absolute">
        <source src="/static/backgroundrotated.mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
