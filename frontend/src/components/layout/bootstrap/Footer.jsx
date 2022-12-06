import '../../assets/css/footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container h-100">
                <div className="row py-0 h-100">
                    <div className="col-sm-10 col-md-3">
                        <div className="footer_widget">
                            <div className="footer_title py-2 mt-3">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="footer_links">
                                <ul className="address_line">
                                    <li>+555 0000 565</li>
                                    <li><a href="/">akladyous@gmail.Com</a></li>
                                    <li>Wellington, Florida, USA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-3">
                        <div className="footer_widget">
                            <div className="footer_title py-2 mt-3">
                                <h3>Our Servces</h3>
                            </div>
                            <div className="footer_links">
                                <ul className="links">
                                    <li><a href="/">Pet Insurance</a></li>
                                    <li><a href="/">Pet surgeries </a></li>
                                    <li><a href="/">Pet Adoption</a></li>
                                    <li><a href="/">Dog Insurance</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-3">
                        <div className="footer_widget">
                            <div className="footer_title py-2 mt-3">
                                <h3>Quick Link</h3>
                            </div>
                            <div className="footer_links">
                                <ul className="links">
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Terms of Service</a></li>
                                    <li><a href="/">Login info</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-3">
                        <div className="footer_widget">
                            <div className="footer_title py-2 mt-3">
                                <h3>Pet Finder</h3>
                            </div>
                            <div className="footer_links">
                                <ul className="links">
                                    <li>Ruby On Rails</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                </ul>
                            </div>
                            {/* <div className="footer_logo">
                                    <a href="/">
                                        <img src={require('../../../assets/images/icons/logo.png')} alt="logo" />
                                    </a>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
