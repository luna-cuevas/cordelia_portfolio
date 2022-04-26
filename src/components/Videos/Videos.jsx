import React, { useState } from 'react'
import './VideosStyle.css'
import ReactPlayer from 'react-player'
import ModalVideo from 'react-modal-video'


const Videos = () => {


    const [openModal, setOpenModal] = useState({})
    const [playVid, setPlayVid] = useState({})

    const toggleModal = (modal) => {
        setOpenModal({ 
            ...openModal, 
            [modal]: !openModal[modal] 
        });
    }

    const toggleVideo = (modal) => {
        setPlayVid({ 
            [modal]: !playVid[modal]
        });
    }

    return (
        <div className='videos-container'>
            <div className='videos-box'>
                <div>
                    
                </div>
                <div id='video1' >
                    <ModalVideo  
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[1]} 
                        videoId="682682632" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer 
                        playing={playVid[1]}
                        controls='false' 
                        muted 
                        loop
                        className="d-block w-100" 
                        url='https://d2630w7qpp1afw.cloudfront.net/goth+(Original).mp4' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(1)}
                        onMouseEnter={() => toggleVideo(1)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[2]} 
                        videoId="534212507" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[2]} 
                        controls='false'   
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212507' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(2)}
                        onMouseEnter={() => toggleVideo(2)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[3]} 
                        videoId="534226744" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[3]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534226744' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(3)}
                        onMouseEnter={() => toggleVideo(3)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[4]} 
                        videoId="682683407" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[4]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682683407' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(4)}
                        onMouseEnter={() => toggleVideo(4)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[5]} 
                        videoId="682683831" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[5]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682683831' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(5)}
                        onMouseEnter={() => toggleVideo(5)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[6]} 
                        videoId="682684157" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[6]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682684157' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(6)}
                        onMouseEnter={() => toggleVideo(6)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[7]} 
                        videoId="534212538" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[7]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212538' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(7)}
                        onMouseEnter={() => toggleVideo(7)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[8]} 
                        videoId="534212423" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[8]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212423' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(8)}
                        onMouseEnter={() => toggleVideo(8)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[9]} 
                        videoId="534212474" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[9]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212474' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(9)}
                        onMouseEnter={() => toggleVideo(9)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[10]} 
                        videoId="534212554" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[10]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212554' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(10)}
                        onMouseEnter={() => toggleVideo(10)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[11]} 
                        videoId="534212610" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[11]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212610' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(11)}
                        onMouseEnter={() => toggleVideo(11)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[12]} 
                        videoId="682685009" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[12]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682685009' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(12)}
                        onMouseEnter={() => toggleVideo(12)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[13]} 
                        videoId="534212687" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[13]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212687' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(13)}
                        onMouseEnter={() => toggleVideo(13)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[14]} 
                        videoId="534212702" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[14]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212702' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(14)}
                        onMouseEnter={() => toggleVideo(14)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[15]} 
                        videoId="534212751" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[15]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/534212751' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(15)}
                        onMouseEnter={() => toggleVideo(15)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[16]} 
                        videoId="682685380" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[16]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682685380' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(16)}
                        onMouseEnter={() => toggleVideo(16)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[17]} 
                        videoId="682685713" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[17]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682685713' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(17)}
                        onMouseEnter={() => toggleVideo(17)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[18]} 
                        videoId="682686153" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[18]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682686153' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(18)}
                        onMouseEnter={() => toggleVideo(18)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[19]} 
                        videoId="682686618" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[19]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682686618' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(19)}
                        onMouseEnter={() => toggleVideo(19)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
                <div id='video1' >
                    <ModalVideo 
                        channel='vimeo' 
                        autoplay='true' 
                        isOpen={openModal[20]} 
                        videoId="682687709" 
                        onClose={() => setOpenModal(false)} />
                    <ReactPlayer
                        playing={playVid[20]} 
                        controls='false' 
                        muted  
                        loop
                        className="d-block w-100" 
                        url='https://vimeo.com/682687709' />
                    <button 
                        id='btn-overlay' 
                        onClick={()=> toggleModal(20)}
                        onMouseEnter={() => toggleVideo(20)} 
                        onMouseLeave={() => setPlayVid(false)} >
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Videos
