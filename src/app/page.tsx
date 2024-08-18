import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex flex-col items-center">
        <Image
          src="/profile.png"
          alt="Dusunax"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-4">Sun A Du ・ Dusunax</h1>
        <p className="text-lg text-gray-500">Software Developer</p>
      </header>

      {/* Video with Scroll Event */}
      <section className="flex flex-col items-center w-full h-dvh border border-red-500">
        <h2>Video</h2>
      </section>

      {/* Portfolio Gallery */}
      <section className="flex flex-col items-center w-full h-dvh border border-red-500">
        <h2>Gallery</h2>
      </section>

      {/* Horizental Scroll */}
      <section className="flex flex-col items-center w-full h-dvh border border-red-500">
        <h2 className="text-2xl font-bold">About Me</h2>
        <ul>
          <li>Creator</li>
          <li>Developer</li>
          <li>Coworker</li>
          <li>Runner</li>
          <li>Travelier</li>
        </ul>
      </section>

      <footer className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Contact</h2>
      </footer>
    </main>
  );
}
