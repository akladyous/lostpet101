import { ToghetherSVG } from '../../../assets/images/icons/Toghether.jsx';
import { LocationSVG } from '../../../assets/images/icons/LocationSVG.jsx';
import { LetterSVG } from '../../../assets/images/icons/LetterSVG.jsx';
import { PhoneSVG } from '../../../assets/images/icons/PhoneSVG.jsx';
import { useOutletContext } from 'react-router-dom';
export default function ReportRequest({ report }) {
  // const {
  //   location: { state },
  // } = useOutletContext();

  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-2 flex flex-col justify-between p-4">
        <h1 className="font-bold text-5xl text-orange-600">
          Create a Lost Pet Flyer
        </h1>
        {/* <p className="text-lg mr-10">
          Join our mission to reunite lost pets with their families. Be the
          reason a lost pet finds their way home.
        </p> */}
        <h4 className="font-semibold text-lg text-orange-600">
          Get the word out about your missing pet immediately.{' '}
        </h4>
        <div className="sm:mr-10">
          <p className=" text-lg">
            Create a lost or found pet flyer with all pertinent information will
            make it easy to help tracking down your pet.
            <br />
            In just a few minutes you&apos;ll create a lost pet poster to help
            with your search.
          </p>
        </div>
        <button className="btn btn-primary w-fit my-4 rounded-full">
          Generate Flyer
        </button>
      </div>
      <div className="relative border border-orange-100 bg-white shadow-xl rounded-2xl">
        <div className="m-0 absolute h-14 w-14 right-1/2 translate-x-1/2 -translate-y-1/2 border-2 border-orange-200 bg-white rounded-full text-center">
          <ToghetherSVG classes="text-orange-500" />
        </div>
        <div className="mt-10 p-4">
          <div className="[&>div]:align-middle">
            <div className="border-b pb-4 mb-4 grid grid-cols-12 space-x-1">
              <div className="col-span-1">
                <LocationSVG classes={'inline-block'} />
              </div>
              <div className="col-span-11">
                <p className="inline-block align-middle col-span-10">
                  Location Address
                </p>
                <p className="">{report.address}</p>
              </div>
            </div>
            <div className="border-b pb-4 mb-4 grid grid-cols-12 space-x-1">
              <div className="col-span-1">
                <LetterSVG classes={'inline-block'} />
              </div>
              <div className="col-span-11">
                <p className="inline-block align-middle">{report.user.email}</p>
              </div>
            </div>
            <div className="border-b pb-4 mb-4 grid grid-cols-12 space-x-1">
              <div className="col-span-1">
                <PhoneSVG classes={'inline-block'} />
              </div>
              <div className="col-span-11">
                <p className="inline-block align-middle">{'624-731-8644'}</p>
              </div>
            </div>
            <div>
              <button className="btn btn-secondary w-full rounded-full">
                Contact the owner
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
