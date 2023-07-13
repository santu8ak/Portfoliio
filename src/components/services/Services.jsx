import React from 'react';
import './services.css';
import css from '../../assets/css.png';



const Services=()=>{
    return(
    <section id='services'>
        <h5>All my blogs</h5>
        <div className='container services__container'>
            <article className='service'>
                <div className="service__head">
                    <h3>CSS Framework overview</h3>
                </div>
                <div className="service__item-image">
                    <img src={css} alt="flexbox"/>
                </div>
                <h3 className='service-title'>
                    Trending css frameworks{''}
                </h3>
                <div className="service-item-cta">
                    <a 
                    href="https://santublog.hashnode.dev/10-most-used-css-frameworks-by-web-developers"
                    className='btn'
                    rel='noreferrer'
                    target='_blank'
                    >
                       Hashnode link
                    </a>
                </div>
            </article>
            <article className='service'>
                <div className="service__head">
                    <h3>Figms Desgine Overview</h3>
                </div>
                <div className="service__item-image">
                    <img src={css} alt="flexbox"/>
                </div>
                <h3 className='service-title'>
                   Figma Car service website Desgine{''}
                </h3>
                <div className="service-item-cta">
                    <a 
                    href="https://www.figma.com/file/PEGnjaewvsocg6mC4QT1Gd/Untitled?type=design&node-id=0-1&mode=design&t=QursBRkyMp6936cQ-0"
                    className='btn'
                    rel='noreferrer'
                    target='_blank'
                    >
                       Figma link
                    </a>
                </div>
            </article>
        </div>

    </section>
    );
};

export default Services;