import React from 'react';
import './project.css';
import IMG3 from '../../assets/covid.jpg';
import commentsystem from '../../assets/commentsystem.PNG';

const projects = [
  {
    id: 3,
    image: IMG3,
    title: 'Covid Data-Single page application-React-Redux',
    github: 'https://github.com/nk8713694/react-redux-capstone',
    demo: 'https://determinedx-aryabhata-b6bc71.netlify.app/',
  },
  {
    id: 4,
    image: IMG3,
    title: ' Similar website to https://usabilityhub.com/ ',
    github: 'https://github.com/nk8713694/HtmlCSSProject',
    demo: 'https://fluffy-cocada-b36abe.netlify.app/',
  },
  {
    id: 5,
    image: commentsystem,
    title: ' Build Comment System like Any Social Media App',
    github: 'https://github.com/nk8713694/BuildCommentSystem',
    demo: 'https://mellow-choux-ae6c2b.netlify.app/',
  },
];
const Projects = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container project_container'>
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='project_item'>
              <div className='project_item-image'>
                <img
                  src={image}
                  alt={title}
                  width='100%'
                  height='100%'
                  object-fit='contain'
                  background-size='cover'
                />
              </div>
              <h3>{title}</h3>
              <div className='project-item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
