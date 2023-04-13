import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className="header-wrapper py-4">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <Link className='img-logo' to='/'>
                                <img src="images/logo.png" alt="logo header" />
                            </Link>
                            <div className='menu-link'>
                                <div className='d-flex align-items-center gap-48'>
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/category'>Category</NavLink>
                                    <NavLink to='/about'>About</NavLink>
                                    <NavLink to='contact'>Contact</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex">
                            <div>
                                <div class="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">
                                        <BsSearch />
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search something here!"
                                        aria-label="Search something here!"
                                        aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                            <div className='d-flex '>
                                <button className='text-white'>Join the community</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header