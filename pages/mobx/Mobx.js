import React, { Component } from 'react'
import { observer } from 'mobx-react'
import MobxStore from './stores/Mobx'

@observer
export default class MobxComponent extends Component {

  constructor(props) {
    super(props)
    this.mobxStore = new MobxStore()
  }

  render() {
    const { counter, increaseCounter, decreaseCounter } = this.mobxStore
    return (
      <div>
        { counter }
        <button onClick={increaseCounter}> + </button>
        <button onClick={decreaseCounter}> - </button>
      </div>
    )
  }
}