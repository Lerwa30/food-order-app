import React from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div classname={classes.content}>{props.children}</div>
    </div>
};

const portalHelp = document.getElementById('overlays');

const Modal = props => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop  onClose={props.onClose} />, portalHelp)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalHelp)}

    </React.Fragment>
};

export default Modal;