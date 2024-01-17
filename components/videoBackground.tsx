const VideoBackground = () => {
  return (
    <>
      <video autoPlay muted loop className="absolute w-full h-5000">
        <source src="/static/background.mp4" />
      </video>
    </>
  );
};

export default VideoBackground;
