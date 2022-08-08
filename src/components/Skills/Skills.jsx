import React from 'react';
import './Skills.scss';
import SkillCard from '../SkillCard/SkillCard';
import img1 from '../../assets/pattern-graphic-design.svg';
import img2 from '../../assets/pattern-illustrations.svg';
import img3 from '../../assets/pattern-motion-graphics.svg';
import img4 from '../../assets/pattern-photography.svg';
import img5 from '../../assets/pattern-ui-ux.svg';
import img6 from '../../assets/pattern-apps.svg';

const Skills = () => {
    return (
        <div className="skills_grid">
            <SkillCard image={img1} skill={'Graphic Design'} bgColor="blue" />
        </div>
    );
};

export default Skills;
