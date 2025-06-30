import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

import { navLinks } from '../../constants/index.js'

function Navbar() {

    useGSAP(()=>{
        gsap.to('nav', {
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(5px)',
            scrollTrigger: {
                trigger: 'nav',
                start: 'top top',
                scrub: true
            }
        })
    }, []);

    return (
        <nav>
            <div className='responsive-container flex md:flex-row flex-col md:justify-between items-center gap-2 py-5'>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p className='font-modern-negra text-3xl leading-1 mt-2'>Velvet Pour</p>
                </a>

                <ul className='flex gap-3 text-nowrap'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar