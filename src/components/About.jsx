import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';

function About() {

    useGSAP(()=>{
        const titleSplit = SplitText.create('#about h2', { type: 'words' });
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        });

        scrollTimeline
            .from('.badge', {
                yPercent: 100,
                opacity: 0
            })
            .from(titleSplit.words, {
                yPercent: 100,
                opacity: 0,
                stagger: 0.02
            })
            .from('#subcontent > p, #subcontent > div', {
                yPercent: 100,
                opacity: 0,
                stagger: 0.02
            })
            .from('.grid-img', {
                yPercent: 100,
                opacity: 0,
                stagger: 0.2
            })
    }, [])

    return (
        <section id='about'>
            <div className='responsive-container'>
                <div className="grid sm:grid-cols-12 gap-5">
                    <div className='md:col-span-7 sm:col-span-6 grid-item'>
                        <p className='badge'>Best Cocktails</p>
                        <h2>Where every detail matters <span className='text-white'>-</span> from muddel to ganish</h2>
                    </div>
                    <div id='subcontent' className='md:col-span-5 sm:col-span-6 grid-item'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt laborum commodi similique ad libero vero nemo deleniti harum, dignissimos asperiores ex sequi debitis quaerat. Deserunt quod adipisci modi ducimus.
                        </p>
                        <div>
                            <p className='flex items-center text-4xl font-bold py-3'>
                                <span>4.5</span>
                                <span>/5</span>
                            </p>
                            <p className='text-sm text-white'>
                                More than +12000 customers
                            </p>
                        </div>
                    </div>

                    <div className='md:col-span-4 sm:col-span-6 h-50 grid-item grid-img'>
                        <div className='noisy' />
                        <img src="/images/abt1.png" alt="grid-img-1" />
                    </div>
                    <div className='md:col-span-6 sm:col-span-6 h-50 grid-item grid-img'>
                        <div className='noisy' />
                        <img src="/images/abt2.png" alt="grid-img-2" />
                    </div>
                    <div className='md:col-span-2 sm:col-span-12 h-50 grid-item grid-img'>
                        <div className='noisy' />
                        <img src="/images/abt5.png" alt="grid-img-5" />
                    </div>

                    <div className='md:col-span-8 sm:col-span-6 h-50 grid-item grid-img'>
                        <div className='noisy' />
                        <img src="/images/abt3.png" alt="grid-img-3" />
                    </div>
                    <div className='md:col-span-4 sm:col-span-6 h-50 grid-item grid-img'>
                        <div className='noisy' />
                        <img src="/images/abt4.png" alt="grid-img-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About