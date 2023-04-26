import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import getGuest from '../../service/getGuest';
import './QRCodeSuccess.css';

export default function QRCodeSuccess() {
    const [guest, setGuest] = useState({ guestNm: "", mobile: "", room: "", gender: 1, idCard: "", nation: "", address: "" });
    const location = useLocation();

    useEffect(() => {
        if (location.state !== undefined) {
            getGuest.getGuestByVisitId({ visitId: location.state.id }).then(result => {
                if (result !== null) {
                    const value = result;
                    const data = {
                        guestNm: value.guestNm,
                        mobile: value.mobile,
                        idCard: value.idCard,
                        gender: value.gender,
                        room: value.ho1 + ' - ' + value.ho2,
                        nation: value.nationNm,
                        address: value.address
                    }
                    setGuest(data);
                }
            }).catch(err => {
                console.log('err when get guest by visit id: ', err);
            })
        }
    }, [location.state])

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div id='successForm'>
                <div>
                    <img alt='' />
                </div>
                <div>
                    <div style={{ textAlign: 'center', marginTop: 24 }}>
                        <div>
                            <label id='successTitleLabel'>Thông tin khai báo của bạn</label>
                        </div>
                        <div>
                            <label id='successSubTitleLabel'>* Lưu ý: Bạn vui lòng chụp ảnh lại màn hình thành công để khai báo với BQL tòa nhà</label>
                        </div>
                    </div>
                    <div id='qrSuccessDetailForm'>
                        <div>
                            <label>Họ và tên: </label>
                            <label className='detailLabel'>{guest.guestNm}</label>
                        </div>
                        <div>
                            <label>Số điện thoại: </label>
                            <label className='detailLabel'>{guest.mobile}</label>
                        </div>
                        <div>
                            <label>Số căn hộ: </label>
                            <label className='detailLabel'>{guest.room}</label>
                        </div>
                        <div>
                            <label>Giới tính: </label>
                            <label className='detailLabel'>{guest.gender === 0 ? "Female" : "Male"}</label>
                        </div>
                        <div>
                            <label>Số CMT/CCCD/ Hộ chiếu: </label>
                            <label className='detailLabel'>{guest.idCard}</label>
                        </div>
                        <div>
                            <label>Quốc tịch: </label>
                            <label className='detailLabel'>{guest.nation}</label>
                        </div>
                        <div>
                            <label>Địa chỉ hiện tại: </label>
                            <label className='detailLabel'>{guest.address}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
