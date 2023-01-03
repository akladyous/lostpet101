import { Link } from 'react-router-dom';
import dog from '../../../assets/images/banner/dog.png';

export default function SlideArea() {
  return (
    <div className="h-[300px] w-full bg-slide-area bg-cover bg-bottom bg-no-repeat md:h-[32rem]">
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-12 w-full md:col-span-4 md:col-start-2">
          <div className="flex h-full flex-col items-center justify-center md:items-start ">
            <h4 className=" mb-5 text-4xl text-white md:text-6xl">We Care</h4>
            <h2 className=" mb-4 text-5xl font-bold text-white md:text-7xl">
              Your Pets
            </h2>
            <div className="mb-5 w-3/4">
              <p className="text-md text-white">
                Create a free lost or found pet listing that is emailed faxed to
                over 25 local shelters, vets and rescue groups.
              </p>
            </div>
            <div className="">
              <a href="contact.html" className="btn btn-secondary rounded-full">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:col-span-7 md:block">
          <div className="dog-area relative h-full">
            <img
              src={dog}
              alt="dog"
              className="absolute top-[5%] left-0 w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
