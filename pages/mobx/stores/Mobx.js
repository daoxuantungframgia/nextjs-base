import { observable, action } from 'mobx'

export default class MobxStore {
  @observable counter = 0

  @action increaseCounter = () => {
    this.counter += 1
  }

  @action decreaseCounter = () => {
    this.counter -= 1
  }
}