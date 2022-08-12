import React from 'react';
import imgAmy from '../../assets/image-amy.webp';
import './Cta.scss';

const Cta = () => {
    return (
        <div className="cta">
            <img className="cta__image" src={imgAmy} alt="" />
            <div className="cta__details">
                <h2 className='cta__title'>I'm Amy and I'd love to work on your next project</h2>
                <p className='cta__info'>I love working with others to provide beautiful design solutions. I've designed
                everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>
                <button className="btn btn--alt cta__btn">Free Consultation</button>
            </div>
            
        </div>
    )
}

export default Cta