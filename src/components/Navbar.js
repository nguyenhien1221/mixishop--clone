import  click  from '@testing-library/user-event/dist/click'
import React , {useState} from 'react'
import {Link , NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../assets/‫img/logo.png'
import '../assets/css/navbar.css'

function Navbar() {

    const state = useSelector((state)=> state.handleCart) 

    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/home" className="navbar-logo">
                    <img src={logo}></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'bx bx-x' : 'bx bx-menu'}></i>
                </div> 
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item' >
                        <NavLink to='/home' className='nav-link' activeClassName='active' onClick={closeMobileMenu}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li className='nav-item drop-down-nav' >
                        <Link to='/category' className='nav-link' onClick={closeMobileMenu} >
                            Danh mục sản phẩm
                            <i className='bx bx-chevron-down'></i>
                        </Link>
                        <div className='sub-nav slide-in-top'>
                            <ul >
                                <li className='sub-nav-item'>
                                    <Link to='/category' className='sub-nav-link' onClick={closeMobileMenu}>
                                        Đồ lưu niệm Mixi
                                    </Link>
                                </li>
                                <li className='sub-nav-item'>
                                    <Link to='/category' className='sub-nav-link' onClick={closeMobileMenu}>
                                        Áo Mixi
                                    </Link>
                                </li>
                                <li className='sub-nav-item'>
                                    <Link to='/category' className='sub-nav-link' onClick={closeMobileMenu}>
                                        Ao ba lỗ
                                    </Link>
                                </li>
                                <li className='sub-nav-item'>
                                    <Link to='/category' className='sub-nav-link' onClick={closeMobileMenu}>
                                        Áo Refund Gaming
                                    </Link>
                                </li>
                                <li className='sub-nav-item'>
                                    <Link to='/category' className='sub-nav-link' onClick={closeMobileMenu}>
                                        Áo PUBG
                                    </Link>
                                </li>
                                <li className='sub-nav-item'>
                                    <Link to='/category' className='sub-nav-link' onClick={closeMobileMenu}>
                                        Áo CSGO
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/noti' className='nav-link' activeClassName='active' onClick={closeMobileMenu}>
                            Thông báo
                        </NavLink>
                    </li>
                </ul>
                <div className='cart'> 
                    <h2 className='cart-title'>{state.length} </h2>
                    <Link to='/cart'>
                        <i class='bx bxs-cart-alt'></i>
                    </Link>
                </div> 
            </div>
        </nav>
    </>
  )
}

export default Navbar