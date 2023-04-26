import React, { useRef, useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './menu/Menu';
import MainPage from './mainPage/MainPage';
import Introduction from './introduction/introduction';
import Advantage from './advantage/Advantage';
import IntroVideo from './introVideo/IntroVideo';
import Solution from './solution/Solution';
import Customer from './customer/Customer';
import Register from './register/Register';
import AccountingSoftware from './accountingSoftware/AccountingSoftware';
import About from './about/About';
import Rule from './rule/Rule';
import { withTranslation } from 'react-i18next';
import Partner from './partner/Partner';
import Workshop from './workshop/Workshop';
import ReactLoading from 'react-loading';
import Benefit from './benefit/Benefit';
import Discount from './discount/Discount';
import './HomePage.css';
import getAuthenCode from '../service/getAuthenCode_Cafe24';
import cafe_24 from '../config/Cafe24_Configuration';
import { useHistory } from "react-router-dom";
import IntrodutionPartner from './introduction/introdution_partner'
import Reason from './reason/Reason'

function HomePage({ t }) {
    const arr = [{ name: 'menu.intro' }, { name: 'menu.advantage' }, { name: 'menu.solution' }, { name: 'menu.customer' }]
    const refIntroVideo = useRef(null);
    const refIntro = useRef(null);
    const refAdv = useRef(null);
    const refCust = useRef(null);
    const refRegister = useRef(null);
    const ref = [refIntroVideo,refIntro,refAdv,refCust];
    let history = useHistory();
    const location = useLocation();

    const executeScroll = (ref) => {
        window.scrollTo({top: ref.current.offsetTop , behavior: 'smooth'})   
    };
    
    const onClickRegulation = (value) => {

    }

    useEffect(() => {
        
        if(location.pathname == "/cafe24") {
            const mall_id = new URLSearchParams(location.search).get("mall_id");
            
            if(mall_id != null) { 
                localStorage.setItem("mall_id", mall_id);

                window.location = `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${cafe_24.InfoERP.client_id}&state=random_string_csrf_code&redirect_uri=${cafe_24.InfoERP.redirect_uri}&scope=${cafe_24.InfoERP.scope}`;
            }else{
                let height = document.body.scrollHeight - 1120;

                if(window.screen.width > 1366) {
                    height = document.body.scrollHeight - 1160;
                }
                window.scrollTo(0, height);

                const authen_code = new URLSearchParams(location.search).get("code");

                if(authen_code != null) {
                    localStorage.setItem("authen_code", authen_code);

                    history.push("/cafe24");
                }
            }
        }
    }, []);

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
                        <Benefit />
                        <Reason />
                    </div>
                    <div id='divCust'>
                            {/* <Customer refer={refCust} /> */}
                            <Partner />
                            <Discount />
                            {/* <Workshop /> */}
                            <Register onClickRegulation={onClickRegulation} refer={refRegister}/>
                            <IntrodutionPartner/>
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