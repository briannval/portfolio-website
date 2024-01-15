const VideoBackground = () => {
  return (
    <>
      <video autoPlay muted loop className="absolute w-full h-full">
        <source src="/static/background.mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
