import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-between h-full">
          <div className="rounded-lg border border-zinc-300 w-11/12 md:w-3/4 md:max-w-[1200px] p-6">
            <h2 className="text-xl font-bold text-center mb-6">
              ورود به قسمت فروش
            </h2>
            <p className="text-center textsm">
              جهت ورود به قسمت فروش روی دکمه زیر کلیک کنید
            </p>
            <Link href="/wizard" className="block text-center text-sm font-semibold text-white bg-zinc-950 rounded-lg p-3 mx-auto w-full mt-6">
              ورود
            </Link>
          </div>
      </main>
    </div>
  );
}
