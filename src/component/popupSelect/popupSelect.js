import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Modal, ListGroup } from 'react-bootstrap';
import './popupSelect.css';

export default function PopupSelect(props) {
    const fullList = props.listSelect;
    const [list, setList] = useState(props.listSelect);
    const [txtSearch, setTxtSearch] = useState("");

    const handleClick = (value) => {
        props.setValue(value);
        props.onClose();
    }

    const onFilter = (value) => {
        setTxtSearch(value);
        setList(fullList.filter(e => {
            return e.value.trim().toLowerCase().includes(value.trim().toLowerCase());
        }))
    }

    useEffect(() => {
        setList(props.listSelect);
    }, [props.listSelect])

    return (
        <div>
            <Modal id='modalSelected' show={props.show} onHide={props.onClose} size='lg' animation={false}>
                <Modal.Header closeButton>
                    <div style={{ width: '100%' }}>
                        <TextField id="outlined-basic" label={props.name} variant="outlined" value={txtSearch} onChange={(event) => onFilter(event.target.value)} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup style={{ maxHeight: '72vh', height: '72vh', overflow: 'auto' }}>
                        {list.map(e => {
                            return (
                                <ListGroup.Item style={{ minHeight: '50px', padding: '5px' }} key={e.id} action onClick={() => handleClick(e)}>
                                    <label style={{ padding: '8px' }} key={e.id}>{e.value}</label>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </div>)
}
