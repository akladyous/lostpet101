import '../../assets/css/services-area.css'
const logo1 = require('../../assets/images/service/service_icon_1.png')
const logo2 = require('../../assets/images/service/service_icon_2.png')
const logo3 = require('../../assets/images/service/service_icon_3.png')

export default function ServiceArea() {
    return (
        <div className='container mx-auto bg-slate-400'>
            <div className="">
                <div className="">
                    <div className="">
                        <h1>Services for every dog</h1>
                        <p>Match with highly rated local dog boarding kennels near you</p>
                        {/* <p>Share details about your dog boarding kennel needs</p> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
