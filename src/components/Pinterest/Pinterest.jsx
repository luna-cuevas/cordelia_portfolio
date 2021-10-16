import React, { useEffect } from 'react'
import './PinterestStyle.css'


const Pintrest = () => {

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
        <div className='pintrest-container'>
            <div className='pintrest-box'>
                <div className='pintrest-board raver'>
                    <a data-pin-scale-height="500" data-pin-scale-width="150" data-pin-do="embedBoard"  href="https://www.pinterest.com/dollskill/kandi-raver-doll/"></a>
                </div>
                <div className='pintrest-board kawaii'>
                    <a data-pin-do="embedBoard" data-pin-scale-height="500" data-pin-scale-width="150" href="https://www.pinterest.com/dollskill/coco-kawaii-doll/"></a>
                </div>
                <div className='pintrest-board goth'>
                    <a data-pin-do="embedBoard" data-pin-scale-height="500" data-pin-scale-width="150" href="https://www.pinterest.com/dollskill/mercy-goth-doll/"></a>
                </div>
                <div className='pintrest-board'>
                    <a data-pin-do="embedBoard" data-pin-scale-height="500" data-pin-scale-width="150" href="https://www.pinterest.com/dollskill/coco-kawaii-doll/"></a>
                </div>
            </div>
        </div>
    )
}

export default Pintrest
