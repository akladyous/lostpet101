// import '../../assets/css/slide-area.css'
import dog from '../../assets/images/banner/dog.png'

export default function SlideArea() {
    return (
        <div className="bg-slide-area bg-cover bg-bottom bg-no-repeat h-[300px] md:h-[30rem]">

            <div className="grid grid-cols-12 h-full">
                <div className="col-span-4 col-start-2">
                    <div className='h-full flex sm:items-center md:items-start md:flex-col  justify-center mb-8'>
                        <h4 className=" text-white text-6xl mb-3">
                            We Care
                        </h4>
                        <h2 className=" text-white text-7xl font-medium mb-8">
                            Your Pets
                        </h2>
                        <div className='w-3/4 mb-8'>
                            <p className="text-white text-md">
                                Create a free lost or found pet listing that
                                is emailed faxed to over 25 local shelters,
                                vets and rescue groups.
                            </p>

                        </div>
                        <div className=''>
                            <a href="contact.html" className="btn-secondary mx-auto">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block col-span-7 ">
                    <div className='dog-area relative h-full'>
                        <img src={dog} alt="dog" className='absolute top-[5%] left-0 w-5/6' />
                    </div>
                </div>
            </div>
        </div>
    )
}
