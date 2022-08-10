import React from 'react';
import './SkillCard.scss';

const SkillCard = ({ image, skill, bgColor, className }) => {
    return (
        <div className={`skillCard bg-${bgColor} ${className}`}>
            <img className="skillCard__image" src={image} alt="" />
            <p className="skillCard__text">{skill}</p>
        </div>
    );
};

export default SkillCard;
