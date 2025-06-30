import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../../constants/index.js'

function Cocktails() {

    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: true
            }
        });

        parallaxTimeline.from('#c-left-leaf', { y: 100 }, 0)
                        .from("#c-right-leaf", { y: -100 }, 0)
    })

    return (
        <section id='cocktails' className='grid place-items-center'>
            <div className="noisy"></div>

            <img src="/images/cocktail-left-leaf.png" alt="left leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="right leaf" id='c-right-leaf' />

            <div className='responsive-container relative z-20 flex md:flex-row flex-col md:justify-between items-center gap-8'>
                <div className='popular'>
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map((drink)=>(
                            <li key={drink.name}>
                                <div>
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>   
                        ))}
                    </ul>
                </div>

                <div className='loved'>
                    <h2>Most loved cocktails:</h2>

                    <ul>
                        {mockTailLists.map((drink)=>(
                            <li key={drink.name}>
                                <div>
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>   
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails