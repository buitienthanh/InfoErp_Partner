
import React, { useEffect, useState } from 'react';
import { Button,Container,Row,Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";

export default function LoadingButton(props) {

    let history = useHistory();

    const [isLoading, setLoading] = useState(false);
  
    const {t, } = useTranslation();

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 3000));
    }

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => {
      props.onSave();
      history.push("/thankyou");
      setLoading(true);
    };

    return (
      <Button
      // variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        id='btnRegister' className='registerButton' 

      >
        {isLoading ? 
        <div className='btnLayout'>
            <label className='registerLabel'>{t('mainPage.registerPopupLoadingBtn')} </label>
        </div>
        : 
        <div className='btnLayout'>
          <label className='registerLabel'>{t('mainPage.registerPopupBtn')}</label>
        </div>
        }
      </Button>
    );
  }