import React from 'react'

import './login-input.less'

export default class LoginInput extends React.Component {
  constructor (props, context) {
    super(props)
  }
  render () {
    return (
      <section className='login-input'>
        <img src={this.props.src} className='icon' alt='' />
        <input type={this.props.type} onChange={this.props.change} placeholder={this.props.placerholder} />
      </section>
    )
  }
}
