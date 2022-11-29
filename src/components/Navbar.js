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

    const scrollTop = () =>{
        window.scrollTo(0, 0);
    }

    return (
    <>
        <nav className='navbar'>
            <div onClick={scrollTop} className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt='logo'></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'bx bx-x' : 'bx bx-menu'}></i>
                </div> 
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li onClick={scrollTop} className='nav-item' >
                        <NavLink to='/' className='nav-link' activeclassname='active' onClick={closeMobileMenu}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li className='nav-item drop-down-nav' >
                        <div className='nav-link' onClick={closeMobileMenu} >
                            Danh mục sản phẩm
                            <i className='bx bx-chevron-down'></i>
                        </div>
                        <div onClick={scrollTop} className='sub-nav slide-in-top'>
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
                    <li onClick={scrollTop} className='nav-item'>
                        <NavLink to='/noti' className='nav-link' activeclassname='active' onClick={closeMobileMenu}>
                            Thông báo
                        </NavLink>
                    </li>
                </ul>

                <div className='search-bar'>
                    <input className='search-input' type='text' placeholder='Tìm kiếm...' />
                    <button className='search-btn'>
                        <i className='bx bx-search-alt-2'></i>
                    </button>
                </div>

                <div className='cart'>
                    <h2 className='cart-leght'>{state.length} </h2>
                    <Link to='/cart'>
                        <i className='bx bxs-cart-alt'></i>
                    </Link>
                </div> 
            </div>
        </nav>
    </>
  )
}

export default Navbar