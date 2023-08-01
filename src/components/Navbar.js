import React from 'react'
import {useNames} from '../context/items/ItemState';
import{
    Link
} from 'react-router-dom'

export default function Navbar(props) {
    const{names} = useNames();
    const{linkUser} = useNames();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" style={{ marginleft: '2rem' }}>
                    <Link className="navbar-brand" to="/">Fashion Rebels</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginright: '2rem' }}>
                            <li className="nav-item" style={{ margin: '1rem' }}>
                                <Link className={props.isActive==='home'?'nav-link active':'nav-link'} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" style={{ margin: "1rem" }}>
                                <Link className={props.isActive==='shop'?'nav-link active':'nav-link'} to="/shirts">Shop</Link>
                            </li>
                            <li className="nav-item" style={{ margin: '1rem' }}>
                                <Link className={props.isActive==='blog'?'nav-link active':'nav-link'} to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item" style={{ margin: '1rem' }}>
                                <Link className={props.isActive==='contact'?'nav-link active':'nav-link'} to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item" style={{ margin: '1rem' }}>
                                <Link className={props.isActive==='login'?'nav-link active':'nav-link'} to={linkUser}>{names}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
