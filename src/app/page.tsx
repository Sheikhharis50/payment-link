import { Timer } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-20">
        {/* Icon */}
        <div className="mb-12 text-[#0f2a6d] w-full" aria-hidden="true">
          <Timer size={36} strokeWidth={1.6} />
        </div>

        {/* Heading */}
        <h1 className="tracking-tight text-[#0b0b0b] leading-[1.15] text-[32px] sm:text-[40px]">
          We&apos;re sorry, it looks like your payment link has expired.
        </h1>
      </div>
    </main>
  );
}
