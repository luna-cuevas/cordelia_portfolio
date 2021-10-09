import React from 'react'
import './ProjectsStyle.css'
import ImageGallery from 'react-image-gallery';
import cordelia from '../img/Cordelia-Headshot.png'

const images = [
    {
        original: {cordelia},
        thumbnail: {cordelia}
    },
    {
        original: {cordelia},
        thumbnail: {cordelia}
    },
    {
        original: {cordelia},
        thumbnail: {cordelia}
    }

]

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-box'>
                <ImageGallery items={images} />

            </div>
        </div>
    )
}

export default Projects
