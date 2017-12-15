import React from 'react'
import { connect } from 'react-redux'
import ReactDom from 'react-dom'
import style from '../style/test.less'

@connect(
  (state, props) => ({
    config: state.config,
  })
)

export default class Login extends React.Component {
  constructor (props, context) {
    super(props)
    this.state = {
      data: {}
    }
  }
  render () {
    return (
      <div>login</div>
    )
  }
}
