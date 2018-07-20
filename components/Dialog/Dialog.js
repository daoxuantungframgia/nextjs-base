import React, { Component } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import Modal from '../Modal'
import { dialogStore } from '../../stores'
import classes from './Dialog.scss'

export const confirm = (message, callback) => {
  dialogStore.handleShow({ message, callback })
}

@observer
export class DialogComponent extends Component {

  handleOk = () => {
    const { handleClose, callback } = dialogStore
    callback(true)
    handleClose()
  }

  handleCancel = () => {
    const { handleClose, callback } = dialogStore
    callback(false)
    handleClose()
  }

  render() {
    const { handleClose, show, message } = dialogStore
    return (
      <div>
        <Modal show={show} handleClose={handleClose}>
          <div className='text-center'> { message } </div>
          <div className={classNames('text-center', classes.btnGroup)}>
            <button onClick={this.handleOk}
              className={classNames('btn btn-success', classes.btnDialog, classes.mr10)}> Đồng ý </button>
            <button onClick={this.handleCancel}
              className={classNames('btn btn-default', classes.btnDialog)} > Huỷ </button>
          </div>
        </Modal>
      </div>
    )
  }
}


