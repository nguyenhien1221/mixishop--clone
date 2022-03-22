import React from 'react'
import video from '../assets/‫img/video.mp4'

import '../assets/css/socail.css'
import '../assets/css/base.css'

function Socail() {
  return (
    <div className='socail-wrap'>
        <div className='video-text'>
                <h1 className='video-title' >MixiShop </h1>
                <h5 className='video-des'>Cập nhật thông tin về sản phẩm mới</h5>
                <div className='video-control'>
                    <button className='primary-btn'>
                        <a href='https://www.facebook.com/MixiShop-182674912385853/' target="_blank">
                        FANPAGE
                        </a>
                    </button>
                    <button className='secondary-btn'>
                        <a href='https://www.instagram.com/mixi.shop/' target="_blank">
                        INSTAGRAM
                        </a>
                    </button>
                </div>
        </div>
        <video className='socail-video' muted loop autoPlay>
            <source src={video} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Socail