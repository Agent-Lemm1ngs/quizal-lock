import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-center bg-blue-50 gap-5 p-24">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <Image src="/logo.png" alt="Quizal" height={150} width={150} />
        <h1 className="text-4xl sm:text-6xl text-gray-800 font-bold">Quizal</h1>
      </div>
      <div className="max-w-2xl sm:text-xl text-center w-full italic text-red-500">
        <p>
          Quizal is currently under reconstruction. Join our{" "}
          <a
            href="https://discord.gg/xaqMPV9qCN"
            className="text-blue-500 hover:text-blue-600 active:text-blue-500 duration-75"
          >
            Discord
          </a>{" "}
          if you require any help.
        </p>
      </div>
    </main>
  );
}
