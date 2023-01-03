import Header from "./Header.jsx";
import Decorative from "./Decorative.jsx";
import ListingSide from "./ListingSide.jsx";
import Steps from "./steps.jsx";

export default function ListingWizard() {
  return (
    <div className={"overflow-hidden"}>
      <Header />
      <div className={"relative bg-white"}>
        <Decorative />
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-20'>
          <div className='relative  border-orange-100 bg-white shadow-xl md:rounded-2xl md:border'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              {/* <ListingSide /> */}
              <Steps />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
