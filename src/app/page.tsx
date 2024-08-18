"use client";
import CustomCursor from "../components/Cursor";
import Header from "./(one-page)/Header";
import VideoSection from "./(one-page)/VideoSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="flex min-h-screen flex-col justify-between bg-[#9e8c86]">
        <Header />
        <VideoSection />

        {/* Portfolio Gallery */}
        <section className="flex flex-col items-center w-full h-dvh border border-red-500">
          <h2>Gallery</h2>
        </section>

        {/* Horizontal Scroll */}
        <section className="flex flex-col items-center w-full h-dvh border border-red-500">
          <h2 className="text-2xl font-bold">About Me</h2>
          <ul>
            <li>Creator</li>
            <li>Developer</li>
            <li>Coworker</li>
            <li>Runner</li>
            <li>Traveler</li>
          </ul>
        </section>

        <footer className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Contact</h2>
        </footer>
      </main>
    </>
  );
}
