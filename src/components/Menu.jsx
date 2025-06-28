import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import { sliderLists } from '../../constants';
import { useMediaQuery } from 'react-responsive';

function Menu() {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(()=>{
        gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1});
        gsap.fromTo('.cocktail img', {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, duration: 1});
        gsap.fromTo('.details h2', {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut'});
        gsap.fromTo('.details p', {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut'});

        gsap.timeline({
            scrollTrigger: {
                trigger: '#menu',
                start: 'top center',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('#m-left-leaf', {y: -100}, 0)
        .to('#m-right-leaf', {y: 200}, 0)
    }, [currentIndex])

    const totalCocktails = sliderLists.length;

    const goToSlide = (index)=>{
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id='menu' aria-label='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id='menu-heading' className='sr-only'>
                Cocktails menu
            </h2>

            <nav className='cocktail-tabs' aria-label='cocktail navigation'>
                {sliderLists.map((cocktail, idx) => {
                    const isActive = idx == currentIndex;

                    return (
                        <button key={cocktail.id} onClick={()=>goToSlide(idx)} className={`${isActive ? `text-white border-white` : `text-white/50 border-white/50`}`}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className='text-left' onClick={()=>goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>

                    <button className='text-right' onClick={()=>goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img className='ml-auto' src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className='cocktail'>
                    <img className='object-contain size-80 xl:size-auto' src={currentCocktail.image } alt="" />
                </div>

                <div className="recipe">
                    <div ref={contentRef} className='info'>
                        <p>Recipe for :</p>
                        <p id='title'>{currentCocktail.name}</p>
                    </div>
                    <div className='details'>
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Menu