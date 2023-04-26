import { Row, Col } from 'react-bootstrap';
import step_1 from '../../img/discount/Step_1.png';
import step_2 from '../../img/discount/Step_2.png';
import step_3 from '../../img/discount/Step_3.png';
import step_4 from '../../img/discount/Step_4.png';
import step_5 from '../../img/discount/Step_5.png';
import step_6 from '../../img/discount/Step_6.png';
import line_break from '../../img/Line_break.png';
import './Discount.css'

const Discount = () => {
    return (
        <div style={{margin:'6% 0'}}>
            <img style={{ width: '114px', height: '8px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={line_break} alt="Girl in a jacket" />
            <p style={{ textAlign: 'center', fontSize: '60px', color: '#152C7C', fontWeight: 'bold', fontFamily: 'SVN-Gilroy',marginTop:'24px' }}>Quy trình nhận ưu đãi/ chiết khấu</p>
            <div style={{ marginTop: '36px'}}>
                <Row>
                    <Col>
                        <Row>
                            <Col md='2'>
                                <img style={{ width: '60px', height: '60px' }} src={step_1} alt="Girl in a jacket" />
                            </Col>
                            <Col md='10'>
                                <div className='step'>Bước 1:</div>
                                <div className='step-title'>Đối tác giới thiệu sản phẩm phần mềm kế toán InfoERP.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{paddingLeft:'10%'}}>
                        <Row>
                            <Col md='2'>
                                <img style={{ width: '60px', height: '60px' }} src={step_4} alt="Girl in a jacket" />
                            </Col>
                            <Col md='10'>
                                <div className='step'>Bước 4:</div>
                                <div className='step-title'>InfoPlus (InfoERP) ghi nhận doanh thu khách hàng từ nguồn của đối tác.</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{marginTop:'38px'}}></div>
                <Row>
                    <Col>
                        <Row>
                            <Col md='2'>
                                <img style={{ width: '60px', height: '60px' }} src={step_2} alt="Girl in a jacket" />
                            </Col>
                            <Col md='10'>
                                <div className='step'>Bước 2:</div>
                                <div className='step-title'>Khách hàng đặt hàng phần mềm kế toán InfoERP thông qua đối tác.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{paddingLeft:'10%'}}>
                        <Row>
                            <Col md='2'>
                                <img style={{ width: '60px', height: '60px' }} src={step_5} alt="Girl in a jacket" />
                            </Col>
                            <Col md='10'>
                                <div className='step'>Bước 5:</div>
                                <div className='step-title'>Infoplus (InfoERP) xác nhận doanh thu cho đối tác định kỳ.</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{marginTop:'38px'}}></div>
                <Row>
                    <Col>
                        <Row>
                            <Col md='2'>
                                <img style={{ width: '60px', height: '60px' }} src={step_3} alt="Girl in a jacket" />
                            </Col>
                            <Col md='10'>
                                <div className='step'>Bước 3:</div>
                                <div className='step-title'>InfoPlus (InfoERP) xác nhận đơn hàng từ đối tác.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{paddingLeft:'10%'}}>
                        <Row>
                            <Col md='2'>
                                <img style={{ width: '60px', height: '60px' }} src={step_6} alt="Girl in a jacket" />
                            </Col>
                            <Col md='10'>
                                <div className='step'>Bước 6:</div>
                                <div className='step-title'>Infoplus ( InfoERP) Thanh toán doanh thu cho đối tác.</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Discount;