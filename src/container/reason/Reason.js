import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import line_break from '../../img/Line_break.png';
import cup from '../../img/reason/cup.png';
import support from '../../img/reason/support.png';
import erp from '../../img/reason/erp.png';
import { Container,Row, Col } from 'react-bootstrap';
import './Reason.css'

function Reason() {
  return (
    <div style={{marginTop:'80px'}}>
        <img className='line-break' src={line_break} alt="Girl in a jacket"/>
        <p className='benefit-title'>Lý do lựa chọn Phần mềm Kế toán InfoERP là đối tác đồng hành</p>
        <div style={{marginTop:'36px'}}></div>
        <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
        >
        <Tab eventKey="home" title="THƯƠNG HIỆU XUẤT SẮC">
            <Container style={{marginTop:'80px'}}>
                <Row>
                    <Col md='5'>
                        <img style={{width:'370px'}} src={cup} alt="Girl in a jacket"/>
                    </Col>
                    <Col md='7'>
                        <p>Được vinh danh trong top 10 Thương Hiệu Hàng Đầu Việt Nam và top 10 Thương Hiệu Xuất Sắc Châu Á</p>
                        <p>Là người bạn đồng hành tin cậy của hơn 150 đối tác doanh nghiệp, +7000 kế toán viên tại Việt Nam và châu Á.</p>
                        <p>Thương hiệu uy tín hội tụ chuyên gia CNTT với hơn 20 năm kinh nghiệm trong lĩnh vực Tài chính, Kế  toán.</p>
                    </Col>
                </Row>
            </Container>
        </Tab>
        <Tab eventKey="profile" title="CHÍNH SÁCH HẤP DẪN">
            <Container style={{marginTop:'80px'}}>
                    <Row>
                        <Col md='5'>
                            <img style={{width:'370px'}} src={support} alt="Girl in a jacket"/>
                        </Col>
                        <Col md='7'>
                            <p>Giải đáp thắc mắc 24/7</p>
                            <p>Hỗ trợ video, tài liệu hướng dẫn sử dụng Phần mềm kế toán Online InfoERP</p>
                            <p>Chính sách chiết khấu và ưu đãi hấp dẫn để thu hút khách hàng tiềm năng</p>
                        </Col>
                    </Row>
            </Container>
        </Tab>
        <Tab eventKey="longer-tab" title="ƯU ĐIỂM CỦA PHẦN MỀM">
            <Container style={{marginTop:'80px'}}>
                <Row>
                    <Col md='5'>
                        <img style={{width:'370px'}} src={erp} alt="Girl in a jacket"/>
                    </Col>
                    <Col md='7'>
                        <p>MIỄN PHÍ Nhập liệu hóa đơn và lập chứng từ tự động với Automated Accounting BOT</p>
                        <p>Tích hợp hệ thống ngoài: Tích hợp ngân hàng, hóa đơn điện tử, hệ thống nhân sự, CRM</p>
                        <p>Giao diện thân thiện, dễ dàng sử dụng</p>
                        <p>Tự động hóa các nghiệp vụ: Công cụ kiểm tra đối chiếu số liệu, tự động đối trừ công nợ - thanh toán.</p>
                        <p>Cập nhật tính năng phần mềm online không có độ trễ</p>
                        <p>Đáp ứng đầy đủ các thông tư của Bộ Tài chính như: Thông tư 200, Thông tư 133,...</p>
                    </Col>
                </Row>
            </Container>
        </Tab>
        </Tabs>
    </div>
  );
}

export default Reason;