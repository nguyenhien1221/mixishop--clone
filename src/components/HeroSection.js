import React from 'react'
import '../assets/css/herosection.css'
import {useNavigate} from 'react-router-dom'

function HeroSection() {
  let navigate = useNavigate();
  function handleClick() {
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
