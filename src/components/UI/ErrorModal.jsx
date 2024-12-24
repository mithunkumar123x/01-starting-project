import React from 'react';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDom from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOvarlay = (props) => {
    return (
        <Card className = {classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick = {props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}
const ErrorModal = (props) => {
    return (
        <React.Fragment>
         <Backdrop />
         {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} /> , document.getElementById('backdrop-root') )}
         
         {ReactDom.createPortal(<ModalOvarlay 
         title={props.title} 
         message={props.message}
         onConfirm = {props.onConfirm} 
         /> , 
          document.getElementById('ovarlay-root')
          )}
        </React.Fragment>
    )
}

export default ErrorModal;