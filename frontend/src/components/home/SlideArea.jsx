import { Link } from 'react-router-dom'
import dog from '../../assets/images/banner/dog.png'

export default function SlideArea() {
    return (
        <div className="w-full bg-slide-area bg-cover bg-bottom bg-no-repeat h-[300px] md:h-[32rem]">
            <div className="grid grid-cols-12 h-full w-full">
                <div className="col-span-12 md:col-span-4 md:col-start-2 w-full">
                    <div className='h-full flex items-center justify-center flex-col md:items-start '>
                        <h4 className=" text-white text-4xl md:text-6xl mb-5">
                            We Care
                        </h4>
                        <h2 className=" text-white text-5xl md:text-7xl font-bold mb-4">
                            Your Pets
                        </h2>
                        <div className='w-3/4 mb-5'>
                            <p className="text-white text-md">
                                Create a free lost or found pet listing that
                                is emailed faxed to over 25 local shelters,
                                vets and rescue groups.
                            </p>
                        </div>
                        <div className=''>
                            <a href="contact.html" className="btn-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-7">
                    <div className='dog-area relative h-full'>
                        <img src={dog} alt="dog" className='absolute top-[5%] left-0 w-[90%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
