import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'


function Footer() {

    const srollTop = () => {
        window.scrollTo(0, 0);
    }
  return (
    <>
        <div className='footer'>
            <div className='footer-des'>
                <div className='footer-aboutus'>
                    <h1 className='footer-title'>Về chúng tôi</h1>
                    <h5>
                        Website duy nhất và chính thức của MixiShop. 
                        Hiện tại chúng mình chỉ nhận đơn trên website 
                        chứ không nhận 
                    </h5>
                </div>
                <div className='footer-category'>
                    <h1 className='footer-title'>Danh mục sản phẩm</h1>
                    <ul className='category-list'>
                        <li onClick={srollTop} className='category-item'>
                            <Link to='category' className='category-link'>Áo CSGO </Link>
                        </li>

                        <li onClick={srollTop} className='category-item'>
                            <Link to='category' className='category-link'>Áo Mixi</Link>
                        </li>

                        <li onClick={srollTop} className='category-item'>
                            <Link to='category' className='category-link'>Áo PUBG</Link>
                        </li>

                        <li onClick={srollTop} className='category-item'>
                            <Link to='category' className='category-link'>Áo Refund Gaming</Link>
                        </li>

                        <li onClick={srollTop} className='category-item'>
                            <Link to='category' className='category-link'>Đồ lưu niệm Mixi </Link>
                        </li>

                        <li onClick={srollTop} className='category-item'>
                            <Link to='category' className='category-link'>Áo ba lỗ </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-info'>
                    <h1 className='footer-title'>Thông tin</h1>
                    <ul className='info-list'>
                        <li onClick={srollTop} className='info-item'>
                            <Link to='/noti' className='info-link'>Giới thiệu</Link>
                        </li>

                        <li onClick={srollTop} className='info-item'>
                            <Link to='/privacy' className='info-link'> Chính sách bảo mật</Link>
                        </li>

                        <li onClick={srollTop} className='info-item'>
                            <Link to='/term' className='info-link'>Điều Khoản</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-support'>
                    <h1 className='footer-title'>Hỗ trợ</h1>
                    <h5>Mọi thắc mắc và góp ý xin vui lòng liên hệ Fanpage và Instagram</h5>
                    <div className='support-socail'>
                        <a href='https://www.facebook.com/MixiShop-182674912385853/' target='_blank' rel="noreferrer">
                            <i class='bx bxl-facebook-circle '></i>
                        </a>
                        <a href='https://www.instagram.com/mixi.shop/' target='_blank' rel="noreferrer">
                            <i class='bx bxl-instagram-alt ' ></i>
                        </a>
                    </div>
                </div>    
            </div>
        </div>
        <div className='footer-copyright'>
            <div>Copyright 2022 &copy; 
               <span> MixiShop</span>
            </div>
            <div className='cloner'>Cloned by nguyenhien1221</div>
        </div>
    </>
  )
}

export default Footer