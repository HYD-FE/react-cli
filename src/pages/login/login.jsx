import React from 'react'
import { connect } from 'react-redux'
import ReactDom from 'react-dom'

import LoginInput from './login-input.jsx'

import style from './login.less'

@connect(
  (state, props) => ({
    state2:state,
    loginInfo: state.loginReducer,
  })
)

export default class Login extends React.Component {
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      name: '',
      password: ''
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changePwd = this.changePwd.bind(this)
    this.validateInfo = this.validateInfo.bind(this)
  }
  validateInfo(){
    console.log(this.state)
    let info = {
      name:'dinglei5959',
      password:'qqq123'
    }
    if (this.state.name === info.name && this.state.password === info.password){
      this.props.dispatch({
        type:'LOGINED'
      })
    }else{
      alert('账号或密码不对！')
    }
  }
  clickHandler() {
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
  changePwd(e) {
    this.state.password = e.target.value
    this.setState(this.state)
  }
  render() {
    return (
      <article className='login-root'>
        <article className="login-container">
          {/* <div>
            <img src={require('../../assets/login.png')} className="icon" alt=""/>
            <input type="text" placeholder="账号输入" onChange={this.changeName} value={this.state.name} />
          </div>
          <div>
            <img src={require('../../assets/password.png')} className="icon" alt="" />
            <input type="password" placeholder="输入密码" value={this.state.rename} onChange={this.changeHandler} />
          </div> */}
          <LoginInput type='text' change={this.changeName.bind(this)} src={require('../../assets/login.png')} placerholder='账号输入'></LoginInput>
          <LoginInput type='password' change={this.changePwd.bind(this)} src={require('../../assets/password.png')} placerholder='输入密码'></LoginInput>
          <div>
            <section onClick={this.validateInfo} className='login-btn'>登录</section>
          </div>
        </article>
      </article>
    )
  }
}
