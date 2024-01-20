import Contact from "@/components/contact";
import VideoBackground from "@/components/videoBackground";

export default function Page() {
  return (
    <>
      <VideoBackground />
      <main className="h-full w-full">
        <div className="flex flex-col h-[850px]">
          <Contact />
        </div>
      </main>
    </>
  );
}
