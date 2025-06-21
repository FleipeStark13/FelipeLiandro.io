'use client'
import { useState } from "react";
import { iProject } from "./handleProjects";
import { Python_Projects, React_Projects, Database_Projects } from "./handleProjects";
import React from "react";
import '../../../styles/projects.css'
import { ArrowLeft, ArrowRight } from "@deemlol/next-icons";

export function Projects () {
    
    const [projects, setProjects] = useState<iProject[]>(Python_Projects);
    const [activeProject, setActiveProject] = useState<number>(0);



    const less_indexer = () => {
        console.log(activeProject, projects.length)
        if ( activeProject == 0 ) {
            setActiveProject(projects.length - 1);

        } else {
            setActiveProject(activeProject - 1);
        }
    }
    const add_indexer = () => {
        if ( activeProject + 1 >= projects.length ) {
            setActiveProject(0)
        } else {
            setActiveProject(activeProject + 1)
            console.log(activeProject)
        }

    }
    
    const removeClassBUt = () => {
        const activeds = document.querySelectorAll('.actived');

        activeds.forEach(actived => {
                actived.classList.remove('actived');
        })
    }

    const removeClass = () => {
        const actives = document.querySelectorAll('.active');

        actives.forEach(active => {
                active.classList.remove('active');
        })

    }

    const handle_activeProject = (
        {
            element,
            index
        }: {
            element: React.MouseEvent<HTMLDivElement, MouseEvent>;
            index: number
        }) => {
            removeClass()
            element.currentTarget.classList.add('active');
            setActiveProject(index);
        }

    const handle_projects = ({
        project,
        element
    }: {
        project: string,
        element: React.MouseEvent<HTMLButtonElement, MouseEvent>
    }) => {
        switch (project.toLowerCase()) {
            case 'python':
                removeClass();
                removeClassBUt();
                setProjects(Python_Projects);
                setActiveProject(0);
                element.currentTarget.classList.add('actived')
                break;
            case 'react':
                removeClass()
                removeClassBUt();

                setProjects(React_Projects);
                setActiveProject(0);
                element.currentTarget.classList.add('actived')
                break;
            case 'database':
                removeClass()
                removeClassBUt();

                setProjects(Database_Projects)
                setActiveProject(0);
                element.currentTarget.classList.add('actived')
                break;
            default:
                break;
        }
    }

    
    return (
        <div id="projects">
            <div className="projects-container">
                <h1 className="project-title">
                    Projetos
                    <br />
                    Realizados
                </h1>

                <div className="projects-flex-card">
                    <div className="projects-left-side">
                        <p id="selectLang">Selecione uma linguagem: </p>

                        <div className="projects-filter-label">
                            <ul>
                                <li>
                                    <button
                                        onClick={(e) => handle_projects({element: e, project: 'python'})}
                                        className="actived"
                                    >
                                        Python
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={(e) => handle_projects({element: e, project: 'react'})}
                                    >
                                        React
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={(e) => handle_projects({element: e, project: 'database'})}
                                    >
                                        Database
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="projects-filter-body">
                            {
                                projects.map((project, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={(element) => {
                                            handle_activeProject({element, index})}}
                                            className={
                                                index === 0 ? "project-filter-item active" : "project-filter-item"
                                            }
                                        >
                                            <p className="item-indexer">{index + 1}</p>
                                            <div className="content-filter-item">
                                                <h1>{
							project.project_name != '' ? project.project_name : 'Ainda não há projetos...'
						}</h1>
                                                <p>{
							project.project_description != '' ? project.project_description : 'Projeto sem descrição...'
						}</p>
                                                <a href={
							project.project_link != '' ? project.project_link : '#'
						}>{
							project.project_link != '' ? project.project_link : 'Link inválido.'
						}</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <div className="index-bar">
                                <ul>
                                    <li>
                                        <button onClick={less_indexer}>
                                            <ArrowLeft size={20} />
                                        </button>
                                    </li>

                                    <div className="index-item">
                                        <p>
                                            {activeProject + 1}
                                        </p>
                                        <p> - </p>
                                        <p>
                                            {projects.length}
                                        </p>
                                    </div>

                                    <li>
                                        <button onClick={add_indexer}>
                                            <ArrowRight size={20} />
                                        </button>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div className="projects-right-side">
                        <div className="container-project-details">
			    <figure>
			    	<img src='https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg' />
			    </figure>
                            <h1>
                                {projects[activeProject].project_name}
                            </h1>

                            <p>
                                {projects[activeProject].project_large_description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
