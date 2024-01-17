import Hero from "@/components/hero";
import VideoBackground from "@/components/videoBackground";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <Hero />
        </div>
      </main>
    </>
  );
}
