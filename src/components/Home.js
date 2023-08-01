import React from 'react'
import b2 from "../assets/img/banner/b2.jpg"
import b17 from "../assets/img/banner/b17.jpg"
import b10 from "../assets/img/banner/b10.jpg"
import{
    Link
} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../assets/img/banner/ban1.jpg')} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/img/banner/ban2.jpg')} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/img/banner/ban3.jpg')} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="card mx-auto text-center" style={{height: '15rem', marginTop: '5rem', backgroundColor: '#edefa2'}}>
                <div className="card-body align-items-center d-flex justify-content-center flex-column">
                    <h1 className="card-title">Featured Products</h1>
                    <br/>
                        <h6 className="card-subtitle mb-2 text-muted">Summer Collection of new modern Design</h6>
                </div>
            </div>

            <div className="row row-cols-2 row-cols-md-4 g-4 text-center" style={{padding: '3vh', marginTop: '5rem', marginBottom: '5rem'}}>
                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f1.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>
                        </Link>

                        <div className="card-body">
                                <h5 className="card-title">Mentific</h5>
                                <p className="card-text">₹1200.00</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f2.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>
                        </Link>

                        <div className="card-body">
                            <h5 className="card-title">Generic</h5>
                            <p className="card-text">₹1200</p>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f3.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>
                        </Link>

                        <div className="card-body">
                            <h5 className="card-title">Unibliss</h5>
                            <p className="card-text">₹1000</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f4.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>
                        </Link>

                        <div className="card-body">
                            <h5 className="card-title">Dmitri</h5>
                            <p className="card-text">₹1100</p>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f5.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/5-star.png')} className="card-img-top" alt="..."/>
                        </Link>

                        <div className="card-body">
                            <h5 className="card-title">Mastermark</h5>
                            <p className="card-text">₹900</p>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f6.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/4-star.png')} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Aelomart</h5>
                            <p className="card-text">₹900</p>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f7.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/4-star.png')} className="card-img-top" alt="..."/>
                        </Link>
        
                        <div className="card-body">
                            <h5 className="card-title">Urbano</h5>
                            <p className="card-text">₹1100</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <Link to="/shirts" style={{textDecoration:'none',textColor:'black'}}>
                        <img src={require('../assets/img/products/f8.jpg')} className="card-img-top" alt="..."/>
                        <img src={require('../assets/img/banner/4-star.png')} className="card-img-top" alt="..."/>
                        </Link>

                        <div className="card-body">
                            <h5 className="card-title">Veirdo</h5>
                            <p className="card-text">₹1000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-6 g-4 w-75 h-75 mx-auto text-center" style={{padding: '3vh', marginTop: '5rem', marginBottom: '5rem'}}>
                <div className="col">
                    <div className="card">
                        <img src={require('../assets/img/features/f1.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Free Shipping</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../assets/img/features/f2.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Online Order</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../assets/img/features/f3.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Save Money</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../assets/img/features/f4.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Promotions</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../assets/img/features/f5.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Happy Sell</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../assets/img/features/f6.png')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  d-flex justify-content-center flex-column" style={{height: '360px', fontSize: '4rem', backgroundImage:`url(${b2})`, marginBottom: '5rem'}}>
                <div className="card w-50 h-75 align-items-center d-flex justify-content-center flex-column" style={{backgroundColor: '#292d3282', color: 'white'}}>
                    <div className="card-header" style={{fontSize: '3rem'}}>
                        70% off on sunglasses
                    </div>
                    <div className="card-body">
                        <Link to="/sunglasses" className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4 w-75 mx-auto" style={{padding: '3vh', height: '20rem'}}>
                <div className="col ">
                    <div className="bg-image card shadow-1-strong" style={{backgroundImage: `url(${b17})`, margin: '1rem', height: '18rem'}}>
                        <div className="card-body text-white d-flex justify-content-center align-items-center flex-column w-50" style={{height: '10rem'}}>
                            <div className="container d-flex flex-column align-items-center" style={{backgroundColor: '#dc6226d1', padding:'0.5rem', borderRadius: '5px'}}>
                                <h3 className="card-title">
                                    Buy 1
                                    <br/>
                                    Get 1
                                </h3>
                                <Link to="/shoes" className="btn btn-success" style={{fontSize: '0.8rem'}}>Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="bg-image card shadow-1-strong" style={{backgroundImage: `url(${b10})`, margin: '1rem', height: '18rem'}}>
                        <div className="card-body text-white d-flex justify-content-center align-items-center flex-column w-50" style={{height: '10rem'}}>
                            <div className="container d-flex flex-column align-items-center" style={{backgroundColor: '#3b847bf5', padding:'0.5rem', borderRadius: '5px;'}}>
                                <h3 className="card-title">
                                    Limited
                                    <br/>
                                    Edition
                                </h3>
                                <Link to="/shoes" className="btn btn-success" style={{fontSize: '0.8rem'}}>Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                        )
}
