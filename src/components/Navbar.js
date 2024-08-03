import React from 'react';
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";

import '../style/Navbar.css';

const Navbar = () => {
    return (
        <div className='container-fluid bg-white'>
            <div className='container bg-green topbar'>
                <div className='d-flex justify-content-between'>
                    <div className='top-info ps-2'>
                        <small className='me-3 d-flex align-items-center'>
                            <span className='text-yellow'><IoLocationSharp /></span>
                            <span className='ms-2 text-white'>123 Street, New York</span>
                        </small>
                        <small className='me-3 d-flex align-items-center'>
                            <span className='text-yellow'><IoMailSharp /></span>
                            <span className='ms-2 text-white'>poojaadayal@gmail.com</span>
                        </small>
                    </div>

                    <div className='top-link text-white'>
                        <a className='text-white' href="#">
                            <small className='mx-2'>Privacy Policy</small>
                        </a>/
                        <a className='text-white' href="#">
                            <small className='mx-2'>Terms of Use</small>
                        </a>/
                        <a className='text-white' href="#">
                            <small className='mx-2'>Sales and Refunds</small>
                        </a>
                    </div>
                </div>
            </div>

            <div className='container px-0'>
                <nav className='navbar navbar-light bg-white navbar-expand-lg'>
                    <a className='navbar-brand' href='#'>
                        <h1 className='text-color display-6'>Fruitables</h1>
                    </a>
                    <div className='navbar-collapse mx-3'>
                        <div className='navbar-nav mx-auto'>
                            <a className='nav-item nav-link text-color active' href='#'>Home</a>
                            <a className='nav-item nav-link green' href='#'>Shop</a>
                            <a className='nav-item nav-link green' href='#'>Shop Details</a>

                            <div className='nav-item dropdown'>
                                <a className='nav-link dropdown-toggle green' href='#' role='button' data-bs-toggle='dropdown'>Pages</a>
                                <div className='dropdown-menu bg-secondary rounded-0 bg-gray-200'>
                                    <a className='dropdown-item' href='cart.html'>Cart</a>
                                    <a className='dropdown-item' href='checkout.html'>Checkout</a>
                                    <a className='dropdown-item' href='testimonial.html'>Testimonial</a>
                                    <a className='dropdown-item' href='404.html'>404 Page</a>
                                </div>
                            </div>
                            <a className='nav-item nav-link green' href='#'>Contact</a>
                        </div>
                        <div className='d-flex ms-auto text-color'>
                            <button
                                type='button'
                                className='btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4'
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                <FaSearch />
                            </button>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content p-4">
                                        <div className="d-flex justify-between">
                                            <h5 className="modal-title" id="exampleModalLabel">search by keyword</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <div className='d-flex justify-center'>
                                            <div>
                                                <input
                                                  type='text'
                                                  id='search'
                                                  placeholder='keywords'
                                                  className='form-control w-full'
                                                />
                                            </div>
                                            <div className='mt-0 pl-3 pr-3 border rounded'>
                                                <i className='fa fa-search mt-2'></i>
                                            </div>

                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <span className='me-4 my-auto'><FaShoppingBag /></span>
                            <span className='me-4 my-auto'><MdPerson /></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
