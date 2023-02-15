import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/style/Container.module.css'


const Projects = () => {
    return (
        <div className={style.projectsBlock} >
            <div className={`${styleContainer.container} ${style.projectsContainer}`} >
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Projects title={'Social network'} description = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla officia veritatis?"} />
                    <Projects title={'Todo list'} description = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla officia veritatis?"} />
                </div>
            </div>
        </div>
    );
};

export default Projects;