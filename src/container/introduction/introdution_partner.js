import line_break from '../../img/Line_break.png';
import { Container,Row, Col } from 'react-bootstrap';
import introduction_vn from '../../img/introduction/introduction_vn.png'
import teamInfoPlus from '../../img/introduction/teamInfoPlus.png'

const IntrodutionPartner = (props) => {
    return (
        <div style={{margin:'153px 0'}} >
            <img style={{ width: '114px', height: '8px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={line_break} alt="line_break.png" />
            <p style={{ textAlign: 'center', fontSize: '60px', color: '#152C7C', fontWeight: 'bold', fontFamily: 'SVN-Gilroy',marginTop: '24px' }}>Giới thiệu chung</p>
            <Container style={{margin:'0'}}>
                <Row style={{marginTop:'50px',height:'376px'}}>
                    <Col md='6' style={{padding:'0'}}>
                        <p style={{fontFamily:'SVN-Gilroy',fontWeight:'bold',color:'#152C7C',fontSize:'18px'}}>
                            InfoERP
                        </p>
                        <p style={{fontFamily:'SVN-Gilroy',fontSize:'16px',lineHeight:'24px',textAlign:'justify',verticalAlign:'top'}}>
                            Phần mềm kế toán InfoERP cung cấp các giải pháp giúp Quản lý Kế toán - tài chính cho các Doanh nghiệp và các đơn vị tài chính, kế toán và kiểm toán tại Việt Nam.
                        </p>
                        <p style={{fontFamily:'SVN-Gilroy',fontSize:'16px',lineHeight:'24px',textAlign:'justify',verticalAlign:'top'}}>
                            InfoErp là phần mềm kế toán trực tuyến, đa ngôn ngữ, được phát triển bởi công ty công nghệ đến từ Hàn Quốc chuyên về các sản phẩm quản lý tài chính, và đáp ứng được mọi loại hình doanh nghiệp: Thương mại, dịch vụ, xâp lắp, sản xuất.
                        </p>
                    </Col>
                    <Col md='6'>
                        <img style={{ width:'570px' }} src={introduction_vn} alt="introduction_vn.png" />
                    </Col>
                </Row>
                <Row style={{background:'#eff2fc',marginTop:'60px',height:'390px'}}>
                    <Col md='6' style={{padding:0}}>
                        <img style={{ width:'82%' }} src={teamInfoPlus} alt="teamInfoPlus.png" />
                    </Col>
                    <Col md='6' style={{padding:'19px 19px 19px 0'}}>
                        <p style={{fontFamily:'SVN-Gilroy',fontWeight:'bold',color:'#152C7C',fontSize:'18px'}}>
                            InfoPlus
                        </p>
                        <p style={{fontFamily:'SVN-Gilroy',fontSize:'16px',lineHeight:'24px',textAlign:'justify',verticalAlign:'top'}}>
                            InfoPlus Là doanh nghiệp BaaS (Banking-as-a-Service) Platform chuyên cung cấp dịch vụ và giải pháp tài chính ICT cần thiết cho các doanh nghiệp và cơ quan tài chính Đông Nam Á, trong đó lấy Việt Nam làm trọng điểm.
                        </p>
                        <p style={{fontFamily:'SVN-Gilroy',fontSize:'16px',lineHeight:'24px',textAlign:'justify',verticalAlign:'top'}}>
                            Dựa trên nền tảng CNTT-TT tiên tiến trong lĩnh vực tài chính, chúng tôi luôn nỗ lực nhằm hỗ trợ các hoạt động kinh doanh của khách hàng một cách hiệu quả nhất.
                        </p>
                        <p style={{fontFamily:'SVN-Gilroy',fontSize:'16px',lineHeight:'24px',textAlign:'justify',verticalAlign:'top'}}>
                            Từ cơ sở hạ tầng đến nền tảng API tài chính kỹ thuật số, InfoPlus đã và đang phấn đấu trở thành động lực dẫn đầu thị trường CNTT tài chính Việt Nam thông qua việc tiên phong trong lĩnh vực CNTT tài chính tiên tiến.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IntrodutionPartner;