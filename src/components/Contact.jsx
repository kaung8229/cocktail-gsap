import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { openingHours, socials } from '../../constants'

function Contact() {

    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center'
            },
            ease: 'power1.inOut'
        });

        scrollTimeline
            .from(titleSplit.words, {
                yPercent: 100,
                opacity: 0,
                stagger: 0.02
            })
            .from('.info', {
                yPercent: 100,
                opacity: 0,
                stagger: 0.05
            })
    })

    return (
        <section id='contact'>
            <img src="/images/footer-right-leaf.png" alt="right leaf" id='f-right-leaf' />
            <img src="/images/footer-left-leaf.png" alt="left leaf" id='f-left-leaf' />

            <div className='responsive-container'>
                <h2>Where to Find Us</h2>

                <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5'>
                    <div className='text-center info'>
                        <h3>Visit our store</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='text-center info'>
                        <h3>Contact us</h3>
                        <p>123456</p>
                        <p>example@gmail.com</p>
                    </div>

                    <div className='text-center info'>
                        <h3>Open Daily</h3>
                        {openingHours.map(time => (
                            <p key={time.day}>
                                {time.day} : {time.time}
                            </p>
                        ))}
                    </div>

                    <div className='flex-center gap-5 info'>
                        <h3>Socials</h3>
                        {socials.map(social => (
                            <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                                <img src={social.icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact