import { observable, action } from 'mobx'


export default class DialogStore {
  @observable show = false
  @observable callback = null
  @observable message = null

  @action handleShow = ({callback, message}) => {
    this.show = true
    this.callback = callback
    this.message = message
  }

  @action handleClose = () => {
    this.show = false
    this.callback = null
    this.message = null
  }
}