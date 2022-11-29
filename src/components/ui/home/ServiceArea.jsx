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
                    <div className="single-service d-flex flex-column align-items-center justify-content-between">
                        <div className='service-bg'>
                            <img src={logo1} alt="logo-1" />
                        </div>
                        <div className='service_content text-center'>
                            <h3>Pet Boarding</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
