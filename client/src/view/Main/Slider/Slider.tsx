import React from 'react';
import { useHorizontalScroll } from '../../../hooks/useHorizontalHook';
import useWindowDimensions from '../../../hooks/useWindowDimens';
import './Slider.scss';


const Slider : React.FC = () => {
    const scroolRef = useHorizontalScroll();

    const { width } = useWindowDimensions();


    return (
        <section className="main__section slider">
            <div className="slider">
                <p>{width}</p>
                <div className="slider__container">
                    <h2 className="slider__title"> Lorem ipsum dolor sit amet </h2>
                    <div ref={scroolRef} className="slider__photos">
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash-1.webp" alt="one" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash-2.webp" alt="two" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash 3.webp" alt="three" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash 4.webp" alt="four" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash 5.webp" alt="five" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash 6.webp" alt="six" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash 7.webp" alt="seven" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/andres-vera-CmmYT6Mm948-unsplash 8.webp" alt="eight" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/pexels-ruby-ruby-14471061.webp" alt="nine" className="slider__image" /></div>
                        <div className="slider__picture"><img src="/slider/webp/pexels-eugenia-remark-14558307.webp" alt="ten" className="slider__image" /></div>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Slider;