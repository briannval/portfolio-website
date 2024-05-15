"use client";

const VideoBackground = () => {
  return (
    <>
      <video autoPlay muted loop className="absolute">
        <source src="/backgroundrotated.mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
