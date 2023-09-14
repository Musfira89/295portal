import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav className='w-full py-6 shadow-lg flex justify-between px-10 bg-[#ff914d]'>
        <h1>296plan</h1>
        <div className='flex gap-4'>
          <Link href="/campaign">
            <button className='square-button'>Admin</button>
          </Link>
          <Link href="/dashboard">
            <button className='square-button'>Center</button>
          </Link>
        </div>
      </nav>


      <div class="container flex max-w-[60rem] flex-col items-center gap-4 text-center mx-auto py-[12rem]">
        <h1 class="font-heading font-bold text-5xl sm:text-3xl md:text-6xl lg:text-7xl leading-loose">
          WELCOME TO <span class="hero-text">295 portal</span></h1>
        <p class=" text-gray-600 max-w-[42rem]  sm:text-xl sm:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  )
}
