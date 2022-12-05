import React from 'react';
import './Section.scss';

interface Props { 
    firstPhoto: string;
    secondPhoto: string;
}

const Section: React.FC<Props> = (prop) => {
    return(
        <section className='main__section content'>
            <div className="content__container">
                <h2 className="content__title title">ut aliquip ex ea commodo consequat</h2>
                <div className="content__first-pair">
                    <img src={prop.firstPhoto} alt="hands" className='content__left-image' />
                    <div className="content__describe">
                        <h3 className="content__sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p className="content__text">
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        <br/>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                <div className="content__second-pair">
                    <div className="content__describe">
                        <h3 className="content__sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p className="content__text">
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        <br/>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <img className='content__right-image' src={prop.secondPhoto} alt="404" />
                </div>
            </div>
        </section>
    )
}

export default Section;