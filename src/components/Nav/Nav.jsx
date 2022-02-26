import React, { useState, useCallback } from 'react'
import './NavStyle.css'
import { HamburgerEmphatic } from 'react-animated-burgers'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import tiktok from '../img/tiktok.svg'



const Nav = () => {


    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
      () => setIsActive(prevState => !prevState),
      [],
    )

    return (
        <div className="Nav">
            <div className="mobile-overlay">
                <div id={isActive ? 'hidden' : 'not'}>
                    <div className='mobile-overlay-box'>
                        <div className='pages'>
                            <Link className='dropdown' to="/">
                                <span>Home</span>
                                <div className='dropdown-content'>
                                    <HashLink smooth to="/#about">About</HashLink>
                                    <HashLink smooth to="/#projects">Projects</HashLink>
                                    <HashLink smooth to="/#contact">Contact</HashLink>
                                </div>
                            </Link>
                            <a className='dropdown2' to=''>
                                <span>Pages</span>
                                <div className='dropdown-content2'>
                                    <Link to='/pinterest'>Pinterest</Link>
                                    <Link to='/videos'>Tik Tok</Link>
                                </div>
                            </a>
                            <a className='dropdown3' to="">
                                <span>Socials</span>
                                <div className='dropdown-content3'>         
                                        <a href="https://www.instagram.com/thegreenfaerie_/" target='_blank'>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="black" 
                                                width="30" 
                                                height="30" 
                                                viewBox="0 0 24 24">
                                                    <path 
                                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.tiktok.com/@divastar_69?lang=en" target='_blank' ><img fill="black" width="30" height="30" src={tiktok} alt="" /></a>
                                </div>
                            </a>
                        </div>

                    </div>
                    
                </div>
            </div>
            <div className="pc-overlay">
                <div className='socials'>
                    <a href="https://www.instagram.com/thegreenfaerie_/" target='_blank' style={{borderBottom: "none"}}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="black" 
                            width="30" 
                            height="30" 
                            viewBox="0 0 24 24">
                                <path 
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@divastar_69?lang=en" target='_blank' style={{borderBottom: "none"}}><img fill="black" width="30" height="30" src={tiktok} alt="" /></a>
                </div>
                <div className='pages'>
                    <Link className='dropdown' to="/">
                        <span>Home</span>
                        <div className='dropdown-content'>
                            <HashLink smooth to="/#about">About</HashLink>
                            <HashLink smooth to="/#projects">Projects</HashLink>
                            <HashLink smooth to="/#contact">Contact</HashLink>
                        </div>
                    </Link>
                    <Link className='dropdown2' to='/pinterest'>
                        <span>Pages</span>
                        <div className='dropdown-content2'>
                            <Link to='/pinterest'> Pinterest</Link>
                            <Link to='/videos'>Tik Tok</Link>
                        </div>
                    </Link>
                </div>
            </div>                
            <HamburgerEmphatic 
                buttonWidth={30}
                barColor="rgb(162, 161, 211)" 
                isActive={isActive}
                toggleButton={toggleButton} />
        </div>
    )
}

export default Nav

