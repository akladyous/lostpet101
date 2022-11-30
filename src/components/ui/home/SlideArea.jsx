import '../../../assets/css/slide-area.css'
import dog from '../../../assets/images/banner/dog.png'

export default function SlideArea() {
    return (
        <div className="slide-area">
            <div className="slide-bg">
                <div className="row h-100">
                    <div className="col-sm-12 col-md-5">
                        <div className="h-100 d-flex flex-column justify-content-center gap-md-3">
                            <div className='slide-text text-center'>
                                <h4 className="text-light display-1 fw-bold">
                                    We Care
                                </h4>
                                <h2 className="text-light fs-1 fw-semibold">
                                    Your Pets
                                </h2>
                            </div>
                            <div className='text-center'>
                                <p className="text-white px-3">
                                    Create a free lost or found pet listing that
                                    is emailed faxed to over 25 local shelters,
                                    vets and rescue groups.
                                </p>
                            </div>
                            <div className='d-none d-md-block text-center my-2'>
                                <a href="contact.html" className="btn-boxed">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-7">
                        <div className='dog-area h-100'>
                            <img src={dog} alt="dog" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
