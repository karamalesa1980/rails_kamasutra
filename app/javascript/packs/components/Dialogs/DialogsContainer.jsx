import Dialogs from './Dialogs';
import { addmessageactionCreator, updatenewmessageTextactionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux'
import React from 'react';
 

let mapStateToProps = (state) => {
  return {
    dialogsReducer: state.dialogsReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addmessage: () => {
      dispatch(addmessageactionCreator())},
    updatenewmessageText: (text) => {
      dispatch(updatenewmessageTextactionCreator(text))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;