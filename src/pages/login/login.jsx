import React from 'react'
import { connect } from 'react-redux'
import ReactDom from 'react-dom'

import LoginInput from './login-input.jsx'

import style from './login.less'

@connect(
  (state, props) => ({
    config: state.config,
  })
)

export default class Login extends React.Component {
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      name: 'dinglei',
      rename: ''
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }
  clickHandler() {
    console.log(this)
    this.setState({
      loading: false,
      name: this.state.rename,
      rename: this.state.rename
    })
  }
  changeName(e) {
    this.state.name = e.target.value
    this.setState(this.state)
  }
  changeHandler(e) {
    this.state.rename = e.target.value
    this.setState(this.state)
  }
  render() {
    return (
      <article className='login-root'>
        <article className="login-container">
          <div>
            <img src={require('../../assets/login.png')} className="icon" alt=""/>
            <input type="text" placeholder="账号输入" onChange={this.changeName} value={this.state.name} />
          </div>
          <div>
            <img src={require('../../assets/password.png')} className="icon" alt="" />
            <input type="password" placeholder="输入密码" value={this.state.rename} onChange={this.changeHandler} />
          </div>
          <LoginInput type='text' src={require('../../assets/login.png')} placerholder='账号输入'></LoginInput>
          <LoginInput type='password' src={require('../../assets/password.png')} placerholder='输入密码'></LoginInput>
          <div>
            <section className='login-btn'>登录</section>
          </div>
        </article>
      </article>
    )
  }
}
