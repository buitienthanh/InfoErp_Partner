import { Row, Col } from 'react-bootstrap';
import vector_1 from '../../img/benefit/Vector_1.png';
import vector_2 from '../../img/benefit/Vector_2.png';
import vector_3 from '../../img/benefit/Vector_3.png';
import vector_4 from '../../img/benefit/Vector_4.png';
import vector_5 from '../../img/benefit/Vector_5.png';
import vector_6 from '../../img/benefit/Vector_6.png';
import line_break from '../../img/Line_break.png';
import './Benefit.css'

const Benefit = (props) => {
    return (
        <div id="advantage" ref={props.refer}>
                <img className='line-break' src={line_break} alt="Girl in a jacket"/>
                <p className='benefit-title'>Bạn sẽ nhận được gì?</p>
                <p className='benefit-subtitle'>Tin tưởng trở thành đối tác tiềm năng của InfoERP với mức ưu đãi hấp dẫn, hệ thống hỗ trợ <br/> nghiệp vụ kế toán - Marketing miễn phí, tận tâm.</p>
                <div>
                <Row>
                    <Col>
                        <div><img className='benefit-img' src={vector_1} alt="vector_1.png"/></div>
                        <p style={{textAlign:'center',marginTop:'24px'}}>1. Chính sách hợp tác hấp dẫn, chiết khấu lên tới 50%</p>
                    </Col>
                    <Col>
                        <div><img className='benefit-img' src={vector_2} alt="vector_2.png"/></div>
                        <p style={{textAlign:'center',marginTop:'24px'}}>2. Hỗ trọ giải đáp chuyên môn, nghiệp vụ kế toán 24/7</p>
                    </Col>
                    <Col>
                        <div><img className='benefit-img' src={vector_3} alt="vector_3.png"/></div>
                        <p style={{textAlign:'center',marginTop:'24px'}}>3. Đào tạo, hỗ trọ kiến thức về phần mềm kế toán InfoERP</p>
                    </Col>
                </Row>
                <Row style={{marginTop:'47px'}}>
                    <Col>
                        <div><img className='benefit-img' src={vector_4} alt="vector_4.png"/></div>
                        <p style={{textAlign:'center',marginTop:'24px'}} >4. Hỗ trọ kiến thức Marketing: quảng bá sản phẩm, bán hàng...</p>
                    </Col>
                    <Col>
                        <div><img className='benefit-img' src={vector_5} alt="vector_5.png"/></div>
                        <p style={{textAlign:'center',marginTop:'24px'}}>5. Kết nối với hệ sinh thái đối tác của InfoPlus trong mảng tài chính - ngân hàng.</p>
                    </Col>
                    {/* <Col>
                        <div><img className='benefit-img' src={vector_6} alt="vector6.png"/></div>
                        <p style={{textAlign:'center',marginTop:'24px'}}>6. Lorem ipsum dolor sit amet consectetur. Duis urna porttitor tempus orci diam amet. Mauris.</p>
                    </Col> */}
                </Row>
                </div>                
        </div>
    );
}

export default Benefit;