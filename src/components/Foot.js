import React from 'react'
import{
    Link
} from 'react-router-dom'

export default function Foot() {
    return (
        <div>
            <footer className="text-center text-lg-start text-white" style={{backgroundColor:'#3e4551', marginTop:'390px'}}>
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">FASHION REBELS</h5>

                                <p>
                                    Fashion Rebels, is your one-stop fashion destination for anything
                                    and everything you need to look good. Our exhaustive range of Western and Indian wear,
                                    summer and winter clothing, formal and casual footwear. From
                                    summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to
                                    street-smart biker jackets, you can rely on us for a wardrobe that is up to date.
                                    Need unique clothing ,we are always there to back you up.
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Get to know Us</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="/" className="text-white">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Careers</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Press Releases</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Make Money with Us</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="/" className="text-white">Sell on Fashion Rebels</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Fashion rebels global selling</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Become an affiliate</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Advertise your product</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Let Us Help you</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="/" className="text-white">Your Account</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">App Download</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Help</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-white">Register complaint</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <hr className="mb-4" />

                    <section className="">
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for free</span>
                            <button type="button" className="btn btn-outline-light btn-rounded">
                                Sign up!
                            </button>
                        </p>
                    </section>

                    <hr className="mb-4" />

                    <section className="mb-4 text-center">

                        <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"><i
                            className="fab fa-facebook-f"></i>
                            <img src={require('../assets/img/banner/fb.png')} alt="" />
                        </Link>

                        <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"><i className="fab fa-twitter"></i>
                            <img src={require('../assets/img/banner/ig.png')} alt="" />

                        </Link>

                        <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"><i className="fab fa-google"></i>
                            <img src={require('../assets/img/banner/twitter.png')} alt="" />

                        </Link>

                    </section>
                </div>

                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Copyright:
                    <Link className="text-white" to="/">FashionRebels.com</Link>
                </div>
            </footer>

        </div>
    )
}
