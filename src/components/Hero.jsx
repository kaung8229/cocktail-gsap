import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';

function Hero() {

    useGSAP(()=>{
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach(chars => chars.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0)
    }, []);

    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MAJITO</h1>

                <img className='left-leaf' src="/images/hero-left-leaf.png" alt="left leaf" />
                <img className='right-leaf' src="/images/hero-right-leaf.png" alt="right leaf" />

                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block mt-20'>
                            <p>Cool. Crisp. Classic.</p>
                            <p className='subtitle'>Sip the spirit <br/> of Summer</p>
                        </div>

                        <div className="view-cocktails">
                            <p className='subtitle'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, tenetur! Quam ab molestiae, autem nisi illo quos ipsa enim asperiores, adipisci aliquid sunt recusandae vel, laborum similique inventore deserunt. Magni.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero