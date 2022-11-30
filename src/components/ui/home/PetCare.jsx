import '../../../assets/css/pet-care.css'
const petCare = require('../../../assets/images/about/pet_care.png')

export default function PetCare() {
    return (
        <div className="pet_care_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-5">
                        <div className="pet_thumb d-flex justify-content-center">
                            <img src={petCare} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 offset-md-1">
                        <div className="pet_info py-3">
                            <div className="section_title">
                                <h2 className='display-4'>
                                    We care your pet
                                </h2>
                                <h1 className=''>
                                    As you care
                                </h1>
                                <p>
                                    Help reuniting lost pets by placing lost and
                                    found pet flyers in your neghbourhood.
                                    <br />
                                    Get your pet home sooner.
                                </p>
                                <a href="about.html" className="btn-boxed cs-primary text-white">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
