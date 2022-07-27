import React from 'react'
import { Link } from 'react-router-dom'
import Copyright from '../components/Footer/Copyright'
import styles from '../components/Footer/Footer.module.css'


function Footer() {
    return (
        <>
            <div className={`${styles.footer} px-8 mt-20 lg:px-16 py-10 grid lg:grid-cols-4`}>
                <div className='lg:col-span-1'>
                    {/* <span className="fa-stack">
                        <a href="/">
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>

                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span> */}
                    <ul className='lg:ml-5'>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-phone"></i>
                            <div>
                                <a className="ml-4 " href="#yourlink"> +91 9911456560</a>
                            </div>
                        </li>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-envelope-open"></i>
                            <div >
                                <a className="ml-4 " href="#yourlink">wecaresanskargurukul@gmail.com</a>
                            </div>
                        </li>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-address-book"></i>
                            <div >
                                <a className="ml-4 " href="#yourlink">  Teda Tehsil Bhagpat Uttar Pradesh </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='lg:col-span-1 mt-3 lg:mt-0'>
                    <div >
                        <h4>About Sanskar Gurukul</h4>
                        <p>
                            A great Place to study.
                        </p>
                    </div>
                </div>

                <div className='ml-0 lg:col-span-1 lg:ml-20 mt-3 lg:mt-0'>
                    <div >
                        <h4>Important Links</h4>
                        <ul >

                            <li >
                                <div>
                                    <Link to='/ragging'
                                    >Ragging Free Campus</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/Classroom"
                                    >ClassRoom</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <Link to='/Lab'
                                    >Lab</Link>
                                </div>
                            </li>                            
                            <li >
                                <div>
                                <Link to="/Library"
                                    >Library</Link>
                                </div>
                            </li>

                            <li >
                                <div>
                                    <Link to="/Cafeteria">Cafeteria</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                <Link to="/Sports"
                                    >Sports</Link>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </div>

                <div className='lg:col-span-1  mt-5 lg:mt-0'>
                    <Link to='/' >
                        <img
                            src='/images/logo/logo.png'
                            alt="Sanskar Gurukul"
                            className=' px-2  w-4/5 h-4/5'
                        />
                    </Link>
                </div>
            </div>
            <Copyright />
        </>
    )
}

export default Footer
