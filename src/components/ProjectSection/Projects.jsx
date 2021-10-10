import React, { useState, useCallback } from 'react'
import './ProjectsStyle.css'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'





const Projects = () => {
   

    return (
        <div className='projects-container'>
            
            <div className='projects-box'>
                <div className='projects-text'>
                    <div className='text1'>
                        <h1>Hello</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse temporibus magnam aspernatur nobis voluptas nemo soluta excepturi est consequatur laborum.</p>
                        <Link to='/videos'>
                        <button>Check out more videos!</button>
                        </Link>
                    </div>
                </div>
                <div className='projects-video'>
                    <Carousel width='200px' fade='true' interval='20000' variant="dark">
                        <Carousel.Item>
                            <div className='video'>
                                <ReactPlayer loop playing muted 
                                height='100%'
                                width='100%'
                                className="d-block w-100" url='https://vimeo.com/534212643' />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='video'>
                                <ReactPlayer loop muted
                                height='100%'
                                width='100%'  className="d-block w-100" url='https://vimeo.com/534212643' />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='video'>
                                <ReactPlayer loop muted
                                height='100%'
                                width='100%'  className="d-block w-100" url='https://vimeo.com/534212643' />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>  
            </div>
        </div>
    )
}

export default Projects
