import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import flagViet from '../../img/menu/flagViet.png'
import viber from '../../img/menu/viber.png'
import './Menu.css'
import MenuLink from '../../component/menuLink/MenuLink';
import { useTranslation } from 'react-i18next';
import selectImg from '../../img/menu/select.png';
import SelectLanguage from '../../component/selectLanguage/SelectLanguage';
import ImgCom from '../../component/imgCom/ImgCom';
import { Container, Col, Row } from 'react-bootstrap'

export default function Menu(props) {
    const executeScroll = props.executeScroll;
    const ref = props.refer;
    const arr = props.arr;
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState({ img: flagViet, name: 'lang.vn', key: 'vn' });
    const [showMenu, setShowMenu] = useState(false);
    const colorIntroduce = "#54D19C";
    const cssOther = "#525252";

    const onChangeLanguage = (lang) => {
        setLanguage({img: lang.img, name: lang.name, key: lang.key});
        setShowMenu(false);
        i18n.changeLanguage(lang.key);
    }

    const menuList = arr.map((v, i) => {
        return (
            i == 0 ? 
            <MenuLink key={i} name={t(v.name)} executeScroll={executeScroll} css={colorIntroduce} refer={ref[i]} i={i} />
            :
            <MenuLink key={i} name={t(v.name)} executeScroll={executeScroll} css={cssOther} refer={ref[i]} i={i} />
        )
    })

    return (
        <div>
            <Navbar
            //  fixed='top' 
             className="ms-3" collapseOnSelect expand="lg" variant="dark" id='menuContainer'>
            <Container>
            <Navbar.Brand href='/'><div id='imgLogo'/></Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav" style={{fontWeight:'700'}}>
                            <Nav >
                                {menuList}
                                
                            </Nav>
                        </Navbar.Collapse>
                        {/* <div id='wrapperPhone'>
                            <a className='phoneNumber' href='tel:02473049933'>
                                <img src={viber} alt="call-info-erp" style={{width:'24px',position:'absolute',top:'6px'}}/> 
                                <span style={{marginLeft:'25px'}}>024 7304 8833</span>
                            </a>
                        </div> */}
                        <div id='wrapperLanguage'>
                            <div id='divLanguage' onClick={() => setShowMenu(!showMenu)}>
                                <ImgCom src={language.img} alt='' className='divFlag'/>
                                <div className='divLangName'>
                                    <label>{t(language.name)}</label>
                                </div>
                                <div style={{margin: 'auto', marginRight: 10}}>
                                    <ImgCom src={selectImg} alt=''/>
                                </div>
                            </div>
                            <SelectLanguage onChangeLanguage={onChangeLanguage} language={language} showMenu={showMenu}/>
                        </div>
                </Container>
            </Navbar>
            <div id='menuLine'/>
        </div>
    )
}