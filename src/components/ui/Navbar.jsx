import React from 'react'
import '../../assets/css/navbar.css'
import logo from '../../assets/images/icons/logo.png'
import avatar from '../../assets/images/avatars/avatar1.png'

export default function Navbar() {
    const currentUser = null;
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" className='logo' />
                        My App
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse h-100" id="mainNavbar">
                        <ul className="navbar-nav me-auto mb-1 mb-lg-0 mx-auto gap-1">
                            <li className="nav-item">
                                <a className="nav-link ps-2 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-2" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link ps-2 dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item " href="/">Action</a></li>
                                    <li><a className="dropdown-item " href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider " /></li>
                                    <li><a className="dropdown-item " href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-2" href='/'>Disabled</a>
                            </li>
                        </ul>
                        <div className='navbar-nav align-content-center justify-content-center gap-2'>
                            {
                                currentUser ?
                                    <div className='d-none d-md-block'>
                                        <img src={avatar} alt="av" className='avatar' />
                                    </div>
                                    :
                                    <>
                                        <button className='btn d-block text-dark fw-bold rounded-5'>join now</button>
                                        <button className='btn d-block btn-box'>sign in</button>
                                    </>

                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
