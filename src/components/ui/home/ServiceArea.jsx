import '../../../assets/css/services-area.css'
const logo1 = require('../../../assets/images/service/service_icon_1.png')
const logo2 = require('../../../assets/images/service/service_icon_2.png')
const logo3 = require('../../../assets/images/service/service_icon_3.png')

export default function ServiceArea() {
    return (
        <div className='container service-area'>
            <div className="row justify-content-center">
                <div class="col-md-10">
                    <div className="section_title text-center">
                        <h1>Services for every dog</h1>
                        <p>Match with highly rated local dog boarding kennels near you</p>
                        {/* <p>Share details about your dog boarding kennel needs</p> */}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="single-service">
                        <div className="icon-area d-flex align-items-center justify-content-center">
                            <div className='service-bg'>
                                <img src={logo1} alt="logo-1" />
                            </div>
                        </div>
                        <div className='service-content text-center my-4'>
                            <h3>Pet Boarding</h3>
                            <p className='py-1'>
                                Create a free lost or found pet listing that
                                is emailed faxed to over 25 local shelters,
                                vets and rescue groups.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="single-service">
                        <div className="icon-area d-flex align-items-center justify-content-center">
                            <div className='service-bg'>
                                <img src={logo2} alt="logo-1" />
                            </div>
                        </div>
                        <div className='service-content text-center my-4'>
                            <h3>FREE LISTING</h3>
                            <p className='py-1'>
                                Speak with neighbors, about your missing
                                pet. Put your lost pet flyer in local vet
                                offices and other community establishments.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="single-service">
                        <div className="icon-area d-flex align-items-center justify-content-center">
                            <div className='service-bg'>
                                <img src={logo3} alt="logo-1" />
                            </div>
                        </div>
                        <div className='service-content text-center my-4'>
                            <h3>FLYER GENERATOR</h3>
                            <p className='py-1'>
                                Create a lost or found pet flyer with all
                                pertinent information will make it easy to
                                help tracking down your pet.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
