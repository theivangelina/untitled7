import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/style/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock} >
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={'Lorem ipsum dolor sit  velit.Lorem ipsum dolor sit  velit'}/>
                    <Skill title={"Css"} description={'Lorem ipsum dolor sit  velit.Lorem ipsum dolor sit  velit. Lorem ipsum dolor sit  velit'}/>
                    <Skill title={"React"} description={'Lorem ipsum dolor sit  velit.Lorem ipsum dolor sit  velit'}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;