import { Dialog, DialogActions, DialogContent, DialogTitle as MuiDialogTitle, Grid, IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'

import './popupConfirm.css';
import ImgCom from '../imgCom/ImgCom';
import confirmX from '../../img/confirmX.svg'

const styles = () => ({
    root: {
        margin: 0,
        padding: '10px',
    },
    closeButton: {
        position: 'absolute',
        right: '0',
        top: '0',
        color: '#808080',
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function PopupConfirm(props) {
    const handleClick = (value) => {
        props.onSend()
        props.onClose();
    }

    return (
        <div>
            <Dialog id='modalConfirm' open={props.open} onClose={props.onClose} maxWidth='sm'>
                <DialogTitle onClose={props.onClose} >
                </DialogTitle>
                <DialogContent>
                    <ImgCom src={confirmX} style={{ width: 64, display: 'block', margin: 'auto', marginBottom: '6px' }} />
                    <Typography align="center">Căn hộ này không có cư dân, bạn có muốn tiếp tục đăng ký?</Typography>
                </DialogContent>
                <DialogActions >
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <button className="cancelBtn" onClick={props.onClose}>HỦY</button>
                        </Grid>
                        <Grid item xs={6}>
                            <button className="btn" onClick={() => handleClick()}>OK</button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>)
}
