import React, { useState, useCallback } from 'react'
import './ProjectsStyle.css'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'




const Projects = () => {
   

    return (
        <div className='projects-container'>
            <div>
                
            </div>
            <div className='projects-box'>  
                <Carousel id='caro' variant="dark">
                    <Carousel.Item>
                        <div className='video'>
                            <ReactPlayer  height='500px' className="d-block w-100" url='https://vimeo.com/534212643' />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='video'>
                            <ReactPlayer  height='500px' className="d-block w-100" url='https://vimeo.com/534212643' />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='video'>
                            <ReactPlayer  height='500px' className="d-block w-100" url='https://vimeo.com/534212643' />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Projects
