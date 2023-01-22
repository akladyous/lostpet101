import TeamArea from '../home/TeamArea.jsx';
import icon1 from '../../../assets/images/adapt_icon/1.png';
import icon2 from '../../../assets/images/adapt_icon/2.png';
import icon3 from '../../../assets/images/adapt_icon/3.png';

export default function About() {
  return (
    <>
      <div className="ReportsRoot w-10/12 md:w-3/4 max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-12 my-20">
          <div className="col-span-12 sm:col-span-5">
            <div className="about-area h-full">
              <div className="flex flex-col justify-center h-full">
                <div>
                  <h3 className="text-5xl font-bold leading-tight">
                    <span className="text-5xl font-normal">We need your</span>
                    &nbsp;help Adopt Us
                  </h3>
                </div>
                <div>
                  <p className="py-10 text-lg">
                    Help reuniting lost pets by placing lost and found pet
                    flyers in your neghbourhood. Supporting our mission, <br />
                    <br />
                    We collaborate with Pet finder to help ensure more animals
                    find their forever homes.
                  </p>
                </div>
                <div>
                  <button className="btn btn-primary rounded-full px-10 font-bold">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 sm:col-start-7">
            <div className="grid grid-cols-2 h-full">
              <div className="col-span-1 m-5">
                <div className="flex flex-col justify-center h-full">
                  <div className="text-center shadow-xl rounded-xl bg-slate-50 py-10">
                    <div className="pb-4">
                      <img src={icon1} alt="" className="mx-auto" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-2">8072+</h1>
                    <p>Flyer Generated</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 m-5">
                <div className="flex flex-col justify-between h-full space-y-10">
                  <div className="text-center shadow-xl rounded-xl bg-slate-50 py-10">
                    <div className="pb-4">
                      <img src={icon2} alt="" className="mx-auto" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-2">1906</h1>
                    <p>Lost Pets</p>
                  </div>
                  <div className="text-center shadow-xl rounded-xl bg-slate-50 py-10">
                    <div className="pb-4">
                      <img src={icon3} alt="" className="mx-auto" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-2">791</h1>
                    <p>Found Pets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto h-48 w-48">
          <div
            id="shape"
            style={{
              borderRadius: '68% 32% 34% 66% / 79% 72% 28% 31%',
            }}
            className="bg-gradient-to-r from-red-600 to-orange-400 h-full w-full"
          ></div>
        </div> */}
      </div>
      <TeamArea />
    </>
  );
}
