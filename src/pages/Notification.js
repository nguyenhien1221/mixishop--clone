import React from 'react'
import '../assets/css/Notification.css'

function Notification() {
  return (
    <div className='noti-wrap'>
        <h1 className='noti-title'>
            Thông báo
        </h1>
        <div className='noti-text'>
            <p>MixiShop xin thông báo hiện Shop KHÔNG có chương trình tri ân khách hàng nào bằng việc 
                tặng nước hoa, quà, hoặc một vài sản phẩm khác như một số bạn đã nhận được thông tin. 
            </p>
            <p>
                Các bạn lưu ý tránh để kẻ gian trục lợi làm ảnh hưởng uy tín của Shop nhé ạ <br/>
                Số điện thoại check đơn của nhân viên MixiShop lần lượt ở dưới đây. 
                Các bạn vui lòng kiểm tra tin nhắn hoặc cuộc gọi check thông tin đơn hàng
                có khớp với các số này hay không nhé 
            </p>
            <div className='noti-phone'>
                <i class='bx bx-phone-call'></i>
                Chi tiết xin liên hệ Hotline: 0822221992 / 0922222016
            </div>
            <p>
                Bạn nào có tin nhắn hoặc cuộc gọi về việc nhận được quà tặng 
                từ chương trình tri ân khách hàng vui lòng comment vào bài đăng inbox
                hoặc gọi trực tiếp vào hotline giúp chúng mình.
            </p>
            <p>
                CÓ MỘT YÊU CẦU NHỎ TRONG LẦN NÀY, CÁC BẠN QUAY LẠI VIDEO BÓC KIỆN HÀNG GIÚP SHOP.
                TRONG TRƯỜNG HỢP ĐỔI TRẢ (ĐỐI VỚI SẢN PHẨM LÀ ÁO, YÊU CẦU PHẢI CÒN NGUYÊN TAG MAC), 
                NHẬN THIẾU HÀNG, CÁC BẠN GỬI LẠI VIDEO ĐÓ VÀ INBOX PAGE MIXISHOP ĐỂ ĐƯỢC HỖ TRỢ NHANH 
                HẾT SỨC CÓ THỂ Ạ.
            </p>
            <p>
                Nếu có bất kì thắc mắc vui lòng inbox fanpage MixiShop để được giải đáp.
                Xin chân thành cám ơn và yêu thương rất nhiều
            </p>
            <p>
            Hiện tại bên shop CHƯA có bất cứ chương trình tri ân nào.
             Nếu có ưu đãi cũng sẽ được thông báo công khai trên các kênh CHÍNH THỨC VÀ DUY NHẤT 
             sau đây: 
            </p>
            
            <div className='noti-socail'>
                Website:  
                <a href='https://shop.mixigaming.com/' className='noti-link'>
                    https://shop.mixigaming.com/
                </a>
            </div>

            <div className='noti-socail'>
                Fanpage: 
                <a href='https://www.facebook.com/MixiShop-182674912385853/' className='noti-link'>
                    https://www.facebook.com/MixiShop-182674912385853/
                </a>
            </div>

            <div className='noti-socail'>
                Instagram: 
                <a href='https://www.instagram.com/mixi.shop/' className='noti-link'>
                    https://www.instagram.com/mixi.shop/
                </a>
            </div>

            <p>
                Email: Mixiishop@gmail.com
            </p>

            <p>
                MixiShop xin vui lòng được phục vụ quý khách!
            </p>
        </div>
    </div>
  )
}

export default Notification