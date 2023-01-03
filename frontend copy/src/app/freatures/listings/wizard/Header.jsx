export default function Header() {
  return (
    <div className={"bg-warm-gray-50"} aria-label='header'>
      <div className={"py-10 lg:py-32"}>
        <div className='relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8'>
          <h1 className='text-warm-gray-900 text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl lg:text-6xl'>
            Get in touch
          </h1>
          <p className='text-warm-gray-500 mt-6 max-w-3xl text-xl'>
            Let us take care of the rest so you can have some peace of mind that
            you are doing all that you can to bring your pet home safely
          </p>
        </div>
      </div>
    </div>
  );
}
