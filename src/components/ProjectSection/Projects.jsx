import React, {  useEffect  } from 'react'
import './ProjectsStyle.css'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import sailormoon2 from '../img/sailormoon2.gif'





const Projects = () => {


    useEffect(() => {
        const script = document.createElement('script')
        script.async = true
        script.type = 'text/javascript'
        script.dataset.pinBuild = 'doBuild'
        script.src = '//assets.pinterest.com/js/pinit.js'
        document.body.appendChild(script)
        if (window.doBuild) window.doBuild()
      }, [])
   

    return (
        <div id='projects' className='projects-container'>
            <h1><img src={sailormoon2} alt="sailor moon heart gif"/>Content<img src={sailormoon2} alt="sailor moon heart gif"/></h1>
            <div className='projects-box'>
                <div className='projects-text'>
                    <h3>✿ Pinterest Boards ✿</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, repellat tenetur iure voluptatum ipsum nulla odit error voluptas? Quia soluta officia est nostrum quod necessitatibus nemo repudiandae voluptatibus sequi autem.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor quibusdam optio omnis temporibus molestias facere esse sequi, doloremque, cupiditate ab accusamus, eum ullam impedit illo recusandae dolorem quod dicta! Eveniet, doloribus sunt error dolores nihil tempora doloremque veniam unde.
                    </p>
                </div>
                
                <div className='projects-pinterest'>
                    <a 
                    id='board'
                    data-pin-build="doBuild" data-pin-do="embedBoard" data-pin-board-width="300" data-pin-scale-height="300" data-pin-scale-width="150" href="https://www.pinterest.com/dollskill/coco-kawaii-doll/"></a>
                    <Link to='/pinterest'>
                        <button>More Boards!</button>
                    </Link>
                </div>
            </div>
            <div className='projects-box'>
            <div className='projects-text'>
                    <h3>✿ Tik Toks ✿</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, repellat tenetur iure voluptatum ipsum nulla odit error voluptas? Quia soluta officia est nostrum quod necessitatibus nemo repudiandae voluptatibus sequi autem.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor quibusdam optio omnis temporibus molestias facere esse sequi, doloremque, cupiditate ab accusamus, eum ullam impedit illo recusandae dolorem quod dicta! Eveniet, doloribus sunt error dolores nihil tempora doloremque veniam unde.
                    </p>
                </div>
            <div className='projects-video'>
                    <Carousel  fade='true' interval='20000' variant="dark">
                        <Carousel.Item>
                            <div>
                                <ReactPlayer loop muted 
                                height='100%'
                                width='100%'
                                className="video" url='https://vimeo.com/534226744' />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <ReactPlayer loop muted
                                height='100%'
                                width='100%'  className="video" url='https://vimeo.com/553040181' />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <ReactPlayer loop muted
                                height='100%'
                                width='100%'  className='video' url='https://vimeo.com/534212538' />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <Link to='/videos'>
                    <button>More Videos!</button>
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default Projects
