import React from 'react';
import './SkillCard.scss';

const SkillCard = ({ image, skill, bgColor }) => {
    return (
        <div className={`skillCard bg-${bgColor}`}>
            <img className="skillCard__image" src={image} alt="" />
            <p className="skillCard__text">{skill}</p>
        </div>
    );
};

export default SkillCard;
