import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';

function Hero() {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(()=>{
        const titleSplit = SplitText.create('.title', { type: 'chars' });
        const subtitleSplit = SplitText.create('.subtitle', { type: 'lines' });

        titleSplit.chars.forEach(chars => chars.classList.add('text-gradient'));

        gsap.timeline({
            duration: 1,
            ease: "expo.out"
        })
        .from(titleSplit.chars, { 
            yPercent: 100, 
            opacity: 0,
            stagger: 0.02
        })
        .from(subtitleSplit.lines, { 
            yPercent: 100, 
            opacity: 0,
            stagger: 0.02
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('#right-leaf', { x: 200 }, 0)
        .to('#left-leaf', { x: -200 }, 0)

        const start = isMobile ? 'top 50%' : 'center 60%';
        const end = isMobile ? '120% top' : 'bottom top';

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start,
                end,
                scrub: 1
            },
            ease: 'none'
        });

        videoRef.current.onloadedmetadata = ()=>{
            videoTimeline.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    }, [])

    return (
        <section id='hero'>
            <div className='noisy'></div>
            <img id='left-leaf' src="/images/hero-left-leaf.png" alt="left leaf" />
            <img id='right-leaf' src="/images/hero-right-leaf.png" alt="right leaf" />

            <div className='relative z-10 responsive-container'>
                <h1 className='title'>MAJITO</h1>

                <div className='relative flex md:flex-row flex-col justify-between md:items-end'>
                    <div className='space-y-5 md:block hidden'>
                        <p className='subtitle'>Cool. Crisp. Classic.</p>
                        <p className='font-modern-negra text-yellow text-5xl subtitle'>Sip the spirit <br/> of Summer</p>
                    </div>

                    <div className="flex flex-col gap-5 md:items-start items-center md:text-lg text-base lg:max-w-2xs md:max-w-xs w-full">
                        <p className='md:text-left text-center subtitle'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, tenetur! Quam ab molestiae, autem nisi illo quos ipsa enim asperiores.
                        </p>
                        <a href="#cocktails" className='hover:text-yellow subtitle'>View Cocktails</a>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 w-full bg-black'>
                <video ref={videoRef} className='md:w-[80%] max-md:h-[50vh] max-md:object-cover mx-auto' src="/videos/output.mp4" muted playsInline preload='auto' />
            </div>
        </section>
    )
}

export default Hero