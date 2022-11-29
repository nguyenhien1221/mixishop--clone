import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../assets/css/herosection.css'

const HeroSection = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/category');
  };
  return (
    <div className='banner'>
        <div className='banner-img'></div>
        <div className='banner-title'>
          <h1>BÁN CHẠY NHẤT</h1>
          <button onClick={handleClick} className='banner-btn'>
            XEM TẤT CẢ
          </button>
        </div>
    </div>
  )
}

export default HeroSection
