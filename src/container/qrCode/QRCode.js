import React, { useEffect, useState } from 'react';
import LuxonUtils from '@date-io/luxon';
import './QRCode.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MuiPickersUtilsProvider, KeyboardDatePicker as MuiKeyboardDatePicker } from '@material-ui/pickers';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import getRoom from '../../service/getRoom';
import checkResident from '../../service/checkResident';
import PopupSelect from '../../component/popupSelect/popupSelect';
import getCountryList from '../../util/countryList';
import saveGuest from '../../service/saveGuest';
import saveGuestRegis from '../../service/saveGuestRegis';
import getGuest from '../../service/getGuest';
import { Form, InputGroup } from 'react-bootstrap';
import validate from '../../util/validateUtil';
import { useTranslation } from "react-i18next";
import PopupConfirm from '../../component/popupConfirm/popupConfirm';
import { withStyles } from '@material-ui/styles';

const KeyboardDatePicker = withStyles({
    root: {
        '& .MuiInputBase-input': {
            padding: '7px 0 7px 5px'
        },
    }
})(MuiKeyboardDatePicker)

export default function QRCode() {
    let nationList = [];
    const { t } = useTranslation();
    const { aptId } = useParams();
    const [roomList, setRoomList] = useState([]);
    const [showRoom, setShowRoom] = useState(false);
    const [showNation, setShowNation] = useState(false);
    const [form, setForm] = useState({ id: 0, idCard: '', guestNm: '', birthday: new Date(), mobile: '', room: { id: 0, value: '' }, gender: 0, nationNm: 'Việt Nam', address: '' });
    const [invalidStatus, setInvalidStatus] = useState({ idCard: false, guestNm: false, mobile: false, nationNm: false, room: false, birthday: false })
    const history = useHistory();
    const match = useRouteMatch();
    const [readOnly, setReadOnly] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnSending, setBtnSending] = useState(false);
    const [lblSendMsg, setLblSendMsg] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [roomId, setRoomId] = useState(0);
    const [showConfirm, setShowConfirm] = useState(false);
    const [residentId, setResidentId] = useState();
    const [errorText, setErrorText] = useState('')

    const handleDateChange = (date) => {
        if (validate.isEmpty(date)) {
            setErrorText('Vui lòng nhập đầy đủ thông tin này')
            setInvalidStatus({ ...invalidStatus, birthday: true });
            setForm({ ...form, birthday: date })
        } else if (date > new Date()) {
            setErrorText('Vui lòng không nhập ngày lớn hơn ngày hiện tại')
            setInvalidStatus({ ...invalidStatus, birthday: true });
            setForm({ ...form, birthday: date })
        } else if (date < new Date('1900-01-01')) {
            setErrorText('Vui lòng không nhập ngày nhỏ hơn ngày 01/01/1900')
            setInvalidStatus({ ...invalidStatus, birthday: true });
            setForm({ ...form, birthday: date })
        } else {
            setErrorText('')
            setInvalidStatus({ ...invalidStatus, birthday: false });
            setForm({ ...form, birthday: date })
        }

    };

    const handleOnBlur = () => {
        if (form.birthday?.toString() === 'Invalid DateTime') {
            setErrorText('Ngày sinh sai định dạng')
            setInvalidStatus({ ...invalidStatus, birthday: true });
        }
    }

    const onCloseRoom = () => {
        setShowRoom(false);
    }

    const onOpenRoom = () => {
        setShowRoom(true);
    }

    const onCloseNation = () => {
        setShowNation(false);
    }

    const onOpenNation = () => {
        setShowNation(true);
    }

    const onOpenConfirm = () => {
        setShowConfirm(true)
    }

    const onCloseConfirm = () => {
        setShowConfirm(false)
    }

    const handleChangeGender = (event) => {
        setForm({ ...form, gender: Number(event.target.value) })
    }

    const handleChangeRoom = (object) => {
        setInvalidStatus({ ...invalidStatus, room: validate.isEmpty(object.value) })
        setForm({ ...form, room: object })
        setRoomId(object.id)
    }

    const handleChangeNation = (object) => {
        setInvalidStatus({ ...invalidStatus, nationNm: validate.isEmpty(object.value) })
        setForm({ ...form, nationNm: object.value });
    }

    const handleChangeInput = (event) => {
        if (event.target.name === 'idCard' || event.target.name === 'mobile') {
            // event.target.value = event.target.value.replace(/[^0-9]+/g, '')
            setInvalidStatus({ ...invalidStatus, [event.target.name]: validate.isEmpty(event.target.value) })
        } else if (event.target.name !== 'address') {
            // event.target.value = event.target.value.trimStart()
            setInvalidStatus({ ...invalidStatus, [event.target.name]: validate.isEmpty(event.target.value) })
        }
        setForm({ ...form, [event.target.name]: event.target.value.trimStart() })
    }

    getCountryList().map((e, v) => {
        return nationList.push({ id: v, value: e });
    })

    let insertRegis = (id) => {
        saveGuestRegis({ guestId: id, aptId: aptId, baRoomId: form.room.id }).then(r => {
            if (r !== null && !validate.isEmpty(r.insertId)) {
                const location = {
                    pathname: `${match.url}/success`,
                    state: { id: r.insertId }
                }
                history.push(location)
            } else {
                setLblSendMsg(t(r.Error));
            }
        }).catch(er => {
            setLblSendMsg(t('qrCode.sendFail'));
            console.log('error when save regis: ', er);
        })
    }

    function validateBeforeSend() {
        const isEmptyGuestNm = validate.isEmpty(form.guestNm) || form.guestNm.length > 200;
        const isEmptyIdCard = !isValidNumber;
        const isEmptyNationNm = validate.isEmpty(form.nationNm);
        const isEmptyRoom = validate.isEmpty(form.room.value);
        const isEmptyMobile = validate.isEmpty(form.mobile);
        const newDate = new Date(form.birthday)
        const isEmptyBirthday = validate.isEmpty(form.birthday) || (form.birthday > new Date()) || form.birthday < new Date('1900-01-01') || newDate.toString() === 'Invalid Date';

        setInvalidStatus({
            guestNm: isEmptyGuestNm,
            idCard: isEmptyIdCard,
            nationNm: isEmptyNationNm,
            room: isEmptyRoom,
            mobile: isEmptyMobile,
            birthday: isEmptyBirthday
        })
        return !isEmptyGuestNm && !isEmptyIdCard && !isEmptyNationNm && !isEmptyRoom && !isEmptyMobile && !isEmptyBirthday;
    }

    const isValidNumber = async () => {
        const number = form.number;
        if (validate.isEmpty(number) || number.length > 50) {
            return false;
        }
        const regExp = /^[^A-Za-z]*$/;
        return regExp.test(number);
    }

    const handleSend = async () => {
        if (validateBeforeSend()) {
            if (!!residentId) {
                onSend()
            } else {
                onOpenConfirm()
            }
        }
    }

    const onSend = async () => {
        setLblSendMsg('');
        if (validateBeforeSend()) {
            setBtnSending(true);
            setBtnDisabled(true);
            const id = await onCheckBeforeSave();
            if (id !== 0) {
                saveGuest.updateGuest({
                    id: id,
                    guestNm: form.guestNm,
                    birthday: form.birthday,
                    gender: form.gender,
                    idCard: form.idCard,
                    mobile: form.mobile,
                    nationNm: form.nationNm,
                    address: form.address
                }).then(result => {
                    if (result !== null && !validate.isEmpty(result.updateId)) {
                        insertRegis(id);
                    } else {
                        setLblSendMsg(t(result.Error));
                    }
                    setBtnSending(false);
                    setBtnDisabled(false);
                }).catch(err => {
                    setBtnSending(false);
                    setBtnDisabled(false);
                    setLblSendMsg(t('qrCode.sendFail'));
                    console.log('error when save guest: ', err);
                })
            } else {
                saveGuest.insertGuest(form).then(result => {
                    if (result !== null && !validate.isEmpty(result.insertId)) {
                        insertRegis(result.insertId);
                    } else {
                        setLblSendMsg(t(result.Error));
                    }
                    setBtnSending(false);
                    setBtnDisabled(false);
                }).catch(err => {
                    setBtnSending(false);
                    setBtnDisabled(false);
                    setLblSendMsg(t('qrCode.sendFail'));
                    console.log('error when save guest: ', err);
                })
            }
        }
    }

    function onCheckBeforeSave() {
        return new Promise((resolve, reject) => {
            getGuest.getGuestByIdCard({ idCard: form.idCard }).then(result => {
                if (Object.keys(result).length > 0) {
                    resolve(result.guestId);
                } else {
                    resolve(0);
                }
            }).catch(err => {
                console.log('err when check id: ', err);
                reject(0)
            })
        })

    }

    const onCheck = () => {
        setLblSendMsg('');
        if (validate.isEmpty(form.idCard)) {
            setInvalidStatus({ ...invalidStatus, idCard: true })
            return;
        }

        setBtnLoading(true);
        setBtnDisabled(true);
        getGuest.getGuestByIdCard({ idCard: form.idCard }).then(result => {
            setForm({
                id: -1,
                guestNm: '',
                birthday: form.birthday,
                gender: 0,
                idCard: form.idCard,
                mobile: '',
                nationNm: form.nationNm,
                address: '',
                room: { id: 0, value: "" }
            });

            if (Object.keys(result).length > 0) {
                if (validate.isEmpty(result.Error)) {
                    const data = result;
                    setForm({
                        id: data.guestId,
                        guestNm: data.guestNm,
                        birthday: data.birthday,
                        gender: data.gender,
                        idCard: data.idCard,
                        mobile: data.mobile,
                        nationNm: data.nationNm,
                        address: data.address,
                        room: { id: 0, value: "" }
                    });

                    setReadOnly(false);
                } else {
                    setLblSendMsg(t(result.Error));
                }
            } else {
                setReadOnly(false);
            }

            setBtnDisabled(false);
            setBtnLoading(false);
        }).catch(err => {
            setBtnLoading(false);
            setBtnDisabled(false);
            console.log('err when check id: ', err);
        })
    }

    useEffect(() => {
        getRoom({ aptId: aptId }).then(result => {
            let list = [];
            if (result !== null) {
                result.map(e => {
                    return list.push({ id: e.baRoomId, value: e.ho1 + ' - ' + e.ho2 })
                })
                setRoomList(list);
            }
        }).catch((err) => {
            console.log('error get list room: ', err);
        })
    }, [aptId])

    useEffect(() => {
        roomId &&
            checkResident({ aptId: aptId, baRoomId: roomId })
                .then(result => setResidentId(result.residentId))
                .catch(err => { console.log('error ba room id: ', err) })
    }, [roomId])

    useEffect(() => {
        onCloseConfirm()
    }, [])

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div id='formQR'>
                <div style={{ textAlign: 'center', marginTop: 40 }}>
                    <div id='titleLabel'>
                        <label>Khai thông tin ra vào:</label>
                    </div>
                    <div id='subTitleLabel'>
                        <label>Bạn vui lòng điền đầy đủ thông tin theo mẫu dưới đây!</label>
                    </div>
                </div>
                <div id='formInputQR'>
                    <div className='inputDiv'>
                        <div>
                            <label>Số CMT/CCCD/ Hộ chiếu <label style={{ color: 'red' }}>*</label></label>
                        </div>
                        <div className='inputQR' style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '100%' }}>
                                <InputGroup hasValidation>
                                    <Form.Control className='formInput' name='idCard' value={form.idCard.replace(/[^0-9]+/g, '')} type="text" maxLength={50} style={{ width: '100%' }} onChange={handleChangeInput} required isInvalid={invalidStatus.idCard} />
                                    <Form.Control.Feedback type="invalid">
                                        Vui lòng nhập đầy đủ thông tin này
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                            <div>
                                <button disabled={btnDisabled} style={{ width: 124, marginLeft: 10 }} onClick={() => onCheck()}> {btnLoading ? "Đang kiểm tra..." : "Kiểm tra"}</button>
                            </div>
                        </div>
                    </div>
                    <div className='inputDiv'>
                        <div>
                            <label>Họ và tên/ Full name <label style={{ color: 'red' }}>*</label></label>
                        </div>
                        <div>
                            <InputGroup hasValidation>
                                <Form.Control className='formInput' name='guestNm' disabled={readOnly} value={form.guestNm} maxLength={200} style={{ width: '100%' }} type='text' onChange={handleChangeInput} required isInvalid={invalidStatus.guestNm} />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập đầy đủ thông tin này
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </div>
                    <div>
                        <div className='inputDiv'>
                            <label>Ngày sinh/ Date of birth <label style={{ color: 'red' }}>*</label></label>
                        </div>
                        <div id='datePickerDiv'>
                            <MuiPickersUtilsProvider utils={LuxonUtils}>
                                <KeyboardDatePicker
                                    disabled={readOnly}
                                    margin="normal"
                                    id="date-picker-dialog"
                                    format="dd/MM/yyyy"
                                    value={form.birthday}
                                    onChange={handleDateChange}
                                    onBlur={handleOnBlur}
                                    disableFuture={true}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    error={invalidStatus.birthday}
                                    helperText={errorText}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className='inputDiv'>
                        <div>
                            <label>Số điện thoại/ Mobile <label style={{ color: 'red' }}>*</label></label>
                        </div>
                        <div>
                            <InputGroup hasValidation>
                                <Form.Control className='formInput' name='mobile' disabled={readOnly} value={form.mobile.replace(/[^0-9]+/g, '')} maxLength={50} style={{ width: '100%' }} type='text' onChange={handleChangeInput} required isInvalid={invalidStatus.mobile} />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập đầy đủ thông tin này
                                </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </div>
                    <div>
                        <div className='inputDiv'>
                            <label>Số căn hộ/ Number apartment <label style={{ color: 'red' }}>*</label></label>
                        </div>

                        <div className='roomPicker'>
                            <InputGroup hasValidation>
                                <Form.Control className='formInput' disabled={readOnly} style={{ width: '100%' }} type='text' value={form.room.value} onClick={onOpenRoom} required isInvalid={invalidStatus.room} />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập đầy đủ thông tin này
                                </Form.Control.Feedback>
                            </InputGroup>
                            <PopupSelect name={'Số căn hộ'} listSelect={roomList} show={showRoom} onClose={onCloseRoom} setValue={handleChangeRoom} />
                        </div>
                    </div>
                    <div className='inputDiv'>
                        <div>
                            <label>Giới tính/ Gender <label style={{ color: 'red' }}>*</label></label>
                        </div>
                        <div className='inputQR'>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1" value={form.gender} onChange={handleChangeGender}>
                                    <div>
                                        <FormControlLabel disabled={readOnly} value={0} control={<Radio />} label="Nữ/Female" />
                                        <FormControlLabel disabled={readOnly} value={1} control={<Radio />} label="Nam/Male" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className='inputDiv'>
                        <div>
                            <label>Quốc tịch/Nationality <label style={{ color: 'red' }}>*</label></label>
                        </div>
                        <div className='roomPicker'>
                            <InputGroup hasValidation>
                                <Form.Control className='formInput' disabled={readOnly} style={{ width: '100%' }} type='text' value={form.nationNm} onClick={() => onOpenNation()} required isInvalid={invalidStatus.nationNm} />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập đầy đủ thông tin này
                                </Form.Control.Feedback>
                            </InputGroup>
                            <PopupSelect name={'Quốc tịch'} listSelect={nationList} show={showNation} onClose={onCloseNation} setValue={handleChangeNation} />
                        </div>
                    </div>
                    <div className='inputDiv'>
                        <div>
                            <label>Địa chỉ hiện tại/Address</label>
                        </div>
                        <div>
                            <InputGroup hasValidation>
                                <Form.Control className='formInput' name='address' disabled={readOnly} value={form.address} style={{ width: '100%' }} type='text' onChange={handleChangeInput} />
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <div>
                    <button id='sendBtn' disabled={btnDisabled} onClick={() => handleSend()}> {btnSending ? "Đang gửi..." : "Gửi"}</button>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <label style={{ color: 'red' }}>{lblSendMsg}</label>
                </div>
            </div>
            <PopupConfirm open={showConfirm} onClose={onCloseConfirm} onSend={onSend} />
        </div>
    )
}
