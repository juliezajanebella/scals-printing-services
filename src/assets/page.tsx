// this usually where the homepage is located.
import Image from "next/image";

export default function HomePage() { // this is a homepage component, it's a html inside typescript/javascript 'jsx' code.
  return ( // most layouts are made with containers, sections, divs, and other html elements.
    <main className="min-h-screen overflow-hidden bg-[#f5f5f5]"> 

      {/* this is the HEADER container */}
      <header className="w-full">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6">
          {/* logo */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f6df5]">
              <span className="text-2xl font-bold text-white">⚡</span>
            </div>
            <span className="text-3xl font-bold text-[#111827]">Base</span>
          </div>
          {/* navigation links */}
          <nav className="hidden items-center gap-12 text-[18px] text-[#667085] lg:flex">
            <a href="#" className="transition hover:text-[#111827]">
              Home
            </a>
            <a href="#" className="transition hover:text-[#111827]">
              About
            </a>
            <a href="#" className="transition hover:text-[#111827]">
              Features
            </a>
            <a href="#" className="transition hover:text-[#111827]">
              Pricing
            </a>
          </nav>
        {/* cta - get yours now */}
          <div className="hidden items-center gap-5 lg:flex">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#111827] shadow-sm">
              Get Yours Now
            </button>
          </div>
      </div>
      </header>

      {/* this is HERO container */}
      <section className="relative">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center px-6 pb-16 pt-8 lg:grid-cols-2 lg:pb-24">
          {/* left side */}
          <div className="z-10 max-w-[760px] pt-8 lg:pt-20">
            <h1 className="text-[44px] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0f172a] md:text-[60px] lg:text-[72px]">
              Welcome to SCALS Printing Services
            </h1>
            <p className="mt-6 text-lg text-[#334155]">
              We are a leading printing company dedicated to providing high-quality printing solutions for businesses and individuals. With our state-of-the-art technology and experienced team, we offer a wide range of printing services to meet your needs.
            </p>
            <button className="mt-8 flex h-14 w-44 items-center justify-center rounded-full bg-[#4f6df5] text-white shadow-sm">
              Get Started
            </button>
          </div>
          {/* right side */}
          <div className="relative mt-16 h-[560px] lg:mt-0 lg:h-[760px]">
            {/* blue rounded element */}
            <div className="absolute right-[-170px] top-[-180px] h-[950px] w-[950px] rounded-full bg-[#4f6df5]" />
            {/* hero image */}
            <div className="absolute bottom-0 right-0 z-10">
              <Image 
                className="h-auto w-[620px] object-contain xl:w-[760px]"
                src="/scals-logo.jpg" 
                alt="Hero Image" 
                width={500} 
                height={500} 
              /> 
            </div>
          </div>       
        </div>
      </section>
    </main>
  )
}
