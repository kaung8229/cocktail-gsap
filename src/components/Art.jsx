import React from 'react'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { featureLists, goodLists } from '../../constants'

function Art() {

    useGSAP(()=>{
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5,
                pin: true
            }
        })

        scrollTimeline
            .to('.will-fade', {
                opacity: 0,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                duration: 1,
                scale: 1.2,
                maskSize: '400%',
                ease: 'power1.inOut'
            })
            .from('.masked-content', {
                opacity: 0
            })
    }, [])
    
    return (
        <section id='art'>
            <div className='responsive-container h-full'>
                <h2 className="will-fade">The ART</h2>

                <div className='sm:h-[70%] h-[80%]'>
                    <div className="cocktail-img">
                        <img className='masked-img' src="/images/under-img.jpg" alt="cocktail image" />
                    </div>

                    <div className='flex md:flex-row flex-col justify-between max-md:h-full'>
                        <ul className='max-md:flex flex-wrap justify-center items-center gap-3 md:space-y-4 will-fade'>
                            {goodLists.map((feature, idx)=>(
                                <li key={idx} className='flex items-center max-sm:w-70 gap-2'>
                                    <img src="/images/check.png" alt="check" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>

                        <ul className='max-md:flex flex-wrap justify-center items-center gap-3 md:space-y-4 will-fade'>
                            {featureLists.map((feature, idx)=>(
                                <li key={idx} className='flex items-center max-sm:w-70 gap-2'>
                                    <img src="/images/check.png" alt="check" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='masked-container'>
                        <h2 className='will-fade'>Sip-Worthy Perfection</h2>
                        <div className='masked-content'>
                            <h3>Made with Craft, Poured with Passion</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, aut.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Art