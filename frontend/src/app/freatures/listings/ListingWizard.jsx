import Decorative from './Decorative.jsx';
import Steps from './steps.jsx';

export default function ListingWizard() {
  return (
    <div className={'md:w-4/5 max-w-7xl mx-auto md:my-20 my-10 py-10'}>
      <div className="relative sm:px-6 md:px-8 text-center md:text-start">
        <h1 className="text-warm-gray-900 text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl lg:text-6xl">
          Listing Report
        </h1>
        <p className="text-warm-gray-500 my-5 max-w-3xl text-xl">
          Let us take care of the rest so you can have some peace of mind that
          you are doing all that you can to bring your pet home safely
        </p>
        <Decorative />
      </div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Steps />
      </main>
    </div>
  );
}
