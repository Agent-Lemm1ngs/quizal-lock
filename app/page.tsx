import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-50/[0.6] border shadow flex-row gap-5 justify-center items-center flex rounded w-full h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="hidden w-full h-full items-center justify-center md:flex">
        <Image src="website-maintenance.svg" height={500} width={500} />
      </div>

      <div className="w-full flex-col gap-5 bg-gradient-to-b from-white to-blue-200  h-full justify-center flex items-center p-10">
        <div className="flex items-center max-w-lg flex-col md:flex-row w-full justify-center gap-2 md:gap-5">
          <div className="flex flex-col justify-center w-full items-center  text-center gap-2">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              className="p-2 md:p-0"
            />{" "}
            <h1 className="text-5xl font-extrabold text-blue-500">Quizal</h1>
            <h1 className="text-xl font-bold">
              We&apos;re performing some vital fixes, please check back later
            </h1>
            <h1 className="gap-2 flex items-center">
              Join our{""}
              <a
                className="border p-2 rounded-lg cursor-pointer border-blue-500 hover:bg-blue-100 active:bg-blue-200"
                href="https://discord.gg/xaqMPV9qCN"
              >
                Discord
              </a>{" "}
              to be updated
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
//
