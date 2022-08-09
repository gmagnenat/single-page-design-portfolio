import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import imgGraphicDesign from '../../assets/pattern-graphic-design.svg';
import imgIllustrations from '../../assets/pattern-illustrations.svg';
import imgMotionGraphics from '../../assets/pattern-motion-graphics.svg';
import imgPhotography from '../../assets/pattern-photography.svg';
import imgUiUx from '../../assets/pattern-ui-ux.svg';
import imgApps from '../../assets/pattern-apps.svg';
import './Skills.scss';

const Skills = () => {
    return (
        <div className="skills_grid">
            <SkillCard
                image={imgGraphicDesign}
                skill={'Graphic Design'}
                bgColor="blue"
                className="col-12"
            />
            <SkillCard
                image={imgUiUx}
                skill={'UI/UX'}
                bgColor="yellow"
                className="col-6"
            />
            <SkillCard
                image={imgApps}
                skill={'Apps'}
                bgColor="pink"
                className="col-6"
            />
            <SkillCard
                image={imgIllustrations}
                skill={'Illustrations'}
                bgColor="orange"
                className="col-12"
            />
            <SkillCard
                image={imgPhotography}
                skill={'Photography'}
                bgColor="cyan"
                className="col-12"
            />
            <SkillCard
                image={imgMotionGraphics}
                skill={'Motion Graphics'}
                bgColor="purple"
                className="col-12"
            />
        </div>
    );
};

export default Skills;
