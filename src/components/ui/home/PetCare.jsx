const petCare = require('../../../assets/images/about/pet_care.png')

export default function PetCare() {
    return (
        <div className="pet_care_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="pet_thumb">
                            <img src="img/about/pet_care.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                        <div className="pet_info">
                            <div className="section_title">
                                <h3><span>We care your pet </span> <br />
                                    As you care</h3>
                                <p>
                                    Help reuniting lost pets by placing lost and
                                    found pet flyers in your neghbourhood. Get
                                    your pet home sooner.
                                </p>
                                <a href="about.html" className="boxed-btn3">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
