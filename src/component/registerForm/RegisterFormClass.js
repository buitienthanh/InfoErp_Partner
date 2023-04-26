import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import { Container, Col, Row,Button } from 'react-bootstrap';
import imgBack from '../../img/register/registerImage.png'
import ImgCom from '../imgCom/ImgCom';
import { withTranslation } from 'react-i18next';
import './RegisterForm.css'
import Popup from '../popup/popup';
import validate from '../../util/validateUtil';
import sendEmail from '../../service/sendEmail';
import saveGuest from '../../service/saveGuest'
import LoadingButton from '../../component/loadingButton/LoadingButton'
import BankAccountImage from '../../img/register/bank-account.png'
import CompanyImage from '../../img/register/company.png'
import PhoneImage from '../../img/register/phone.png'

let initialState = {
    name: '',
    phone: '',
    email: '',
    area: '',
    tax: '',
    content: '',
    numberRoom: '',
    errorName: null,
    errorPhone: null,
    errorEmail: null,
    errorContent: null,
    errorRoom: null,
    errorTax:null,
    isFail: false,
    show: false,
    isLoading: false,
    currentPathName : '/infoerp'
}

class RegisterFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.changeValue = this.changeValue.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    changeValue(params) {
        this.setState({
            [params.name]: params.value
        });
    }

    onSave = () => {
        let isShow = !validate.isEmpty(this.state.name)
            && !validate.isEmpty(this.state.phone)
            && !validate.isEmpty(this.state.email)
            && !validate.isEmpty(this.state.content)
            && !validate.isEmpty(this.state.tax);
        this.setState({
            errorName: validate.isEmpty(this.state.name) ? 'empty' : null,
            errorPhone: validate.isEmpty(this.state.phone) ? 'empty' : (!validate.isPhone(this.state.phone) ? 'invalid' : null),
            errorEmail: validate.isEmpty(this.state.email) ? 'empty' : (!validate.isEmail(this.state.email) ? 'invalid' : null),
            errorContent: validate.isEmpty(this.state.content) ? 'empty' : (!validate.isEmail(this.state.content) ? 'invalid' : null),
            errorTax: validate.isEmpty(this.state.tax) ? 'empty' : (!validate.isTax(this.state.tax) ? 'invalid' : null),
        })

        if (isShow){
            this.setState({
                isLoading: true
            })

            if(this.props.pathName == "/cafe24") {
                this.state.currentPathName = this.props.pathName;
                window.location = 'https://infoerpvn.com:9100/admin/downloadInfoERP';
            }

            this.onSendEmail();
            this.onSaveRegisteredUsers();
        }     
    }

    onSendEmail() {
        this.setState({
            isFail: false,
            show: true,
            isLoading : false
        })
        sendEmail({ name: this.state.name, phone: this.state.phone, email: this.state.email, tax: this.state.tax}).then(result => {
            // this.setState({
            //     isFail: false,
            //     show: true,
            //     isLoading : false
            // })
        }).catch(error => {
            // this.setState({
            //     isFail: false,
            //     show: true,
            //     isLoading : false
            // })
        })
    }

    onSaveRegisteredUsers() {
        saveGuest.insertGuest({ name: this.state.name, phone: this.state.phone, email: this.state.email, tax: this.state.tax, sourceFrom : this.state.currentPathName}).then(result => {
            
        }).catch(error => {
          
        })
    }

    onClose() {
        if (this.props.isModal && !this.state.isFail) {
            this.props.onCloseModal();
        }

        this.setState(initialState);
    }

    render() {
        const { t } = this.props;

        return (
            <>
            <div className='regLayoutDiv'>
                <div id={this.props.id} className='registerDiv'>
                    <ImgCom className='regImgBack' alt='' src={imgBack} />
                    <div id='registerForm'>
                        <div style={{ textAlign: 'center' }} className='mobile'>
                            <label className='regTitle'>{this.props.isModal == false ? t('register.title') : t("mainPage.registerPopupTitle") }</label>
                        </div>
                        <div className='regTitle web'>
                            {this.props.isModal == false ? 
                             <div>
                             <label>{ this.props.isModal == false ? t('register.webTitle1') : ""}</label>
                            </div>
                            :
                            <></>
                            }
                           
                           {t('register.webTitle2') == "" ? <></> :
                            <div>
                            <label>{ this.props.isModal == false ? t('register.webTitle2') : t("mainPage.registerPopupTitle")}</label>
                            </div>
                           }
                        </div>
                        <div style={{ maxWidth: 1234, margin: 'auto' ,position:'relative'}}>
                            <Row>
                                <Col md='6' style={{color:'white',paddingTop:'8px'}}>
                                    <Row>
                                        <Col md='2'>
                                            <img src={BankAccountImage} style={{width:'60px',height:'60px'}} />
                                        </Col>
                                        <Col md='10'>
                                            <p style={{fontSize:'18px',color:'#FFFFFF',fontWeight:'bold'}}>ĐỐI TÁC KẾ TOÀN DỊCH VỤ</p>
                                            <ul>
                                                <li>Kế toán dịch vụ (Tổ chức có tư cách pháp nhân)</li>
                                                <li>Kế toán dịch vụ (Cá nhân)</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row style={{marginTop:'84px'}}>
                                        <Col md='2'>
                                            <img src={CompanyImage} style={{width:'60px',height:'60px'}} />
                                        </Col>
                                        <Col md='10'>
                                            <p style={{fontSize:'18px',color:'#FFFFFF',fontWeight:'bold'}}>ĐỐI TÁC BÁN HÀNG</p>
                                            <ul>
                                                <li>
                                                Tổ chức có tư cách pháp nhân hoạt động trong các lĩnh vực liên quan: các hiệp hội doanh nghiệp, phần mềm bán hàng CRM - POS, phần mềm nhân sự HRM , công ty luật, dịch vụ doanh nghiệp ...
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Button className='registerPhone'>
                                        <img src={PhoneImage}  style={{width:'24px',height:'24px',margin:'0 10px 10px 0'}}/>
                                        <span style={{fontSize:'24px',fontWeight:'bold',lineHeight:'28px'}}>024 7304 8833</span>
                                    </Button>
                                </Col>
                                <Col md='6'>
                                    <form>
                                        <FormInput name={'register.form.name'} type={'name'} format = {'text'} maxLength = {'300'} value={this.state.name} onChange={this.changeValue} errorName={'errorName'} error={this.state.errorName} placeholder={t('placeholder.name')}/>
                                        <FormInput name={'register.form.phone'} type={'phone'} format = {'number'} maxLength = {'100'} value={this.state.phone} onChange={this.changeValue} errorName={'errorPhone'} error={this.state.errorPhone}  placeholder={t('placeholder.phone')}/>
                                        <FormInput name={'register.form.tax'} type={'tax'} format = {'text'} maxLength = {'13'} value={this.state.tax} onChange={this.changeValue} errorName={'errorTax'} error={this.state.errorTax}  placeholder={t('placeholder.tax')}/>
                                        <FormInput name={'register.form.email'} type={'email'} format = {'text'} maxLength = {'100'} value={this.state.email} onChange={this.changeValue} errorName={'errorEmail'} error={this.state.errorEmail}  placeholder={t('placeholder.email')}/>
                                        <FormInput name={'register.form.content'} type={'content'} format = {'text'} maxLength = {'100'} value={this.state.content} onChange={this.changeValue} errorName={'errorContent'} error={this.state.errorContent}  placeholder={t('placeholder.content')}/>
                                        <div style={{display:'flex',justifyContent:'center' }} className="buttonRegisterDiv">
                                            <LoadingButton onSave = {this.onSave} isModal = {this.props.isModal} />
                                        </div>
                                    </form>
                                </Col>
                            </Row>    
                        </div>
                    </div>
                </div>
                <Popup onClose={this.onClose} show={this.state.show} isFail={this.state.isFail} />
            </div>
            </>
        )
    }
}

export default withTranslation()(RegisterFormClass);