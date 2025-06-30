import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import { sliderLists } from '../../constants';

function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(()=>{
        gsap.from('.cocktail img', { xPercent: -100, opacity: 0 });
        gsap.from('#title', { yPercent: 100, opacity: 0 });
        gsap.from('.details p', { yPercent: 100, opacity: 0 });
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
        <section id="menu">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id='menu-heading' className='sr-only'>
                Cocktails menu
            </h2>

            <div className='responsive-container'>
                <nav className='cocktail-tabs' aria-label='cocktail navigation'>
                    {sliderLists.map((cocktail, idx) => {
                        const isActive = idx == currentIndex;
    
                        return (
                            <button key={cocktail.id} onClick={()=>goToSlide(idx)} className={`${isActive && `text-white border-white`}`}>
                                {cocktail.name}
                            </button>
                        )
                    })}
                </nav>

                <div className='relative lg:h-100 md:h-80 h-60 max-md:mb-5'>
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
                        <img className='h-full mx-auto' src={currentCocktail.image } alt="" />
                    </div>
                </div>

                <div className="recipe">
                    <div className='cocktail-info'>
                        <p className='shrink-0'>Recipe for :</p>
                        <p id='title'>{currentCocktail.name}</p>
                    </div>
                    <div className='details'>
                        <p id='subtitle'>{currentCocktail.title}</p>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Menu