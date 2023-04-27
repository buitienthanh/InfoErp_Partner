import React, { useRef } from 'react';
import Menu from './menu/Menu';
import MainPage from './mainPage/MainPage';
import Register from './register/Register';
import About from './about/About';
import { withTranslation } from 'react-i18next';
import Partner from './partner/Partner';
import Benefit from './benefit/Benefit';
import Discount from './discount/Discount';
import './HomePage.css';
import IntrodutionPartner from './introduction/introdution_partner'
import Reason from './reason/Reason'

function HomePage({ t }) {
    const arr = [{ name: 'menu.intro' }, { name: 'menu.advantage' }, { name: 'menu.solution' }, { name: 'menu.customer' }]
    const refIntroVideo = useRef(null);
    const refIntro = useRef(null);
    const refAdv = useRef(null);
    const refCust = useRef(null);
    const refRegister = useRef(null);
    const ref = [refIntro,refIntroVideo,refAdv,refCust];

    const executeScroll = (ref) => {
        window.scrollTo({top: ref.current.offsetTop , behavior: 'smooth'})   
    };
    
    const onClickRegulation = (value) => {

    }
   
    return (
        <div>
            <div id='homePage'>
                <div id='colorBackDiv'>
                    <Menu executeScroll={executeScroll} refer={ref} arr={arr} t={t} />
                    <MainPage />
                </div>
                <div className='siteLayout'>
                    <div>
                        {/* <IntroVideo refer = {refIntroVideo} /> */}
                        {/* <Introduction refer={refIntro} /> */}
                        {/* <Solution /> */}
                        {/* <AccountingSoftware /> */}
                        {/* <Advantage refer={refAdv} /> */}
                        <Benefit refer={refAdv}/>
                        <Reason refer={refIntro}/>
                    </div>
                    <div id='divCust'>
                            {/* <Customer refer={refCust} /> */}
                            <Partner refer={refCust}/>
                            <Discount refer = {refIntroVideo}/>
                            {/* <Workshop /> */}
                            <Register onClickRegulation={onClickRegulation} refer={refRegister}/>
                            <IntrodutionPartner />
                    </div>
                </div>
                <div className='footer'>
                    <About executeScroll={executeScroll} refer={ref} arr={arr} t={t}/>
                </div>
               
            </div>
        </div>
    )
}

export default withTranslation()(HomePage);