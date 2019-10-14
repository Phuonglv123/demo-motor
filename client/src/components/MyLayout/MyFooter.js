import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MyFooter extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div>
                                <ul>
                                    <li><h5>Tìm hiểu về sản phẩm</h5></li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div>
                                <ul>
                                    <li>
                                        <h5>Chính sách và điều khoản</h5>
                                    </li>
                                    <li>
                                        <Link to='/footer1/'>Điều khoản chung</Link></li>
                                    <li>Chính sách bảo mật</li>
                                    <li>Chính sách thanh toán</li>
                                    <li>Chính sách giao hàng và dịch vụ</li>
                                    <li>Chính sách bảo hành và đổi trả</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div>
                                <ul>
                                    <li><h5>Kết nối với chúng tôi</h5></li>
                                    <li><i className="fab fa-facebook-square"></i></li>
                                    <li><i className="fas fa-phone-square-alt"></i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className='text-center'>
                                <img src={require('../../res/img/logonhattrung.png')} alt=""
                                     style={{width: '60px', filter: 'brightness(1000)'}}/>
                            </div>
                            <div>
                                <ul>
                                    <li>CÔNG TY TNHH KỸ THUẬT - THƯƠNG MẠI NHẬT TRUNG</li>
                                    <li><span>Địa chỉ:</span></li>
                                    <li>
                                        <span>Hotline:</span>
                                        <a href="tel: 09765431">0987654321</a>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <a href="">support@nhattrungpump.com</a>
                                    </li>
                                    <li>
                                        {/*<img*/}
                                        {/*    src={require('../../res/img/logo-da-thong-bao-website-voi-bo-cong-thuong-600x228.png')}*/}
                                        {/*    alt="" style={{width: '100px'}}/>*/}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFooter;
