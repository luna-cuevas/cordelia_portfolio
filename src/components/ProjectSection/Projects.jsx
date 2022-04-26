import React, {  useEffect, Head  } from 'react'
import './ProjectsStyle.css'
import '../Videos/VideosStyle.css'
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
            <head>
            <script async src="https://www.tiktok.com/embed.js"></script>
            </head>
            <h1><img src={sailormoon2} alt="sailor moon heart gif"/>Content<img src={sailormoon2} alt="sailor moon heart gif"/></h1>
            <div className='projects-box'>
                <div className='projects-text'>
                    <h3>✿ Pinterest Boards ✿</h3>
                    <p>I have always had an eye for strong visual aesthetics both niche & widely trendy. From the concept of the board to the arrangement of images everything on a Pinterest board I make has a purpose that perpetuates the desired vibes of your brand. </p>
                </div>
                <div className='pinterest-boards'>
                    <div className='projects-pinterest'>
                        <a 
                        id='board'
                        data-pin-build="doBuild" data-pin-do="embedBoard" data-pin-board-width="300" data-pin-scale-height="300" data-pin-scale-width="150" href="https://www.pinterest.com/dollskill/coco-kawaii-doll/"></a>
                        <Link className='button' to='/pinterest'>
                            <button>More Boards!</button>
                        </Link>
                    </div>
                    <div className='projects-pinterest'>
                        <a data-pin-scale-height="300" data-pin-scale-width="300" data-pin-do="embedBoard"  href="https://www.pinterest.com/dollskill/kandi-raver-doll/"></a>
                        <Link className='button' to='/pinterest'>
                            <button>More Boards!</button>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className='projects-box'>
                <div className='projects-text'>
                    <h3>✿ Tik Toks ✿</h3>
                    <p>I got my introduction to the app while spearheading the Dolls Kill tik tok page. This included creating the account, reaching out to their first tik Tok influencers, working with well known creators, planning content, as well as finding the brand voice in the medium of 15 second videos & learning how to engage the costumer on the app. I have been mastering tik tok since October 2019 & would consider myself very well versed in creating clean content that focuses on product as well as contributes to current trends both in and out of the app.  </p>
                </div>
                <div className='projects-video'>
                    <ReactPlayer 
                        controls='false' 
                        muted 
                        loop
                        className="video" 
                        url='https://vimeo.com/682685713' />
                    <ReactPlayer 
                        controls='false' 
                        muted 
                        loop
                        className="video" 
                        url='https://vimeo.com/682686153' />
                    <ReactPlayer 
                        controls='false' 
                        muted 
                        loop
                        className="video hide" 
                        url='https://vimeo.com/682686618' />
                </div> 
                <Link to='/videos' className='button'>
                    <button>More Videos!</button>
                </Link>  
            </div>
        </div>
    )
}

export default Projects
