import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Modal from '../../components/Modal'
import { confirm } from '../../components/Dialog'
import pageComponent from '../../layouts/PageComponent'
import classes from './BootstrapDemo.scss'

class BootstrapDemo extends Component {

  state={
    show: false
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  showDialog = () => {
    confirm('this is test message', (result) => {
      if (result) {
        console.log('ok is clicked')
      } else {
        console.log('cancel is Clicked')
      }
    })
  }

  render() {
    const { show } = this.state
    return (
      <div className={classes.container}>
        bootstrap page
        <Row className='show-grid'>
          <Col md={6}>
            this is left content
          </Col>
          <Col md={6}>
            this is right content
          </Col>
        </Row>
        <button onClick={this.showModal}> show modal </button>
        <button onClick={this.showDialog}> show dialog </button>
        <Modal show={show}
          handleClose={this.handleClose}
          title='this is title'
        >
          this is body
        </Modal>
      </div>
    )
  }
}

export default pageComponent(BootstrapDemo)
