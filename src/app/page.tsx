import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/scals-logo.jpg"
          alt="SCALS Logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Coming Soon 👕🖨️🪡
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            SCALS Printing Services Admin/Owner Dashboard System and Transaction POS. WOW Sino ka dyan.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Abangan 3-5 years HAHAHA !  
          </p>
          <p>IN JESUS NAME . WOHOOO !!! KAY SCALS ANG 2026 💗 .</p>
        </div>
      </main>
    </div>
  );
}
