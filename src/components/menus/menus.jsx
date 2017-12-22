import React from 'react'

import './menus.less'

export default class Menus extends React.Component {
  constructor (props, context) {
    super(props)

    this.state = {
      isOpen: false,
      height: 0,
      children: []
    }

    this.clickHandler = this.clickHandler.bind(this)
    this.open = this.open.bind(this)
  }

  componentWillMount () {
    let state = this.state
    let children = []
    this.props.children && this.props.children.list && this.props.children.list.forEach((e, i) => {
      if (e.children) {
        children.push(<Menus key={i} children={e.children} text={e.name} />)
      } else {
        children.push(<Menus key={i} url={e.url} text={e.name} />)
      }
    })
    state.children = children
    this.setState(state)
  }

  open () {
    if (this.state.isOpen) {
      this.state.height = this.refs.container.offsetHeight
    } else {
      this.state.height = 0
    }
    this.setState(this.state)
  }

  clickHandler () {
    if (this.props && this.props.children) {  // 有孩子的操作
      let state = this.state
      state.isOpen = !state.isOpen
      this.setState(state)
      this.open()
    } else {  // 无孩子进行链接跳转操作
      if (window.global && window.global.history) {
        if (window.global.history.getCurrentLocation().pathname !== this.props.url) {
          window.global.history.push({ pathname: this.props.url })
        }
      }
    }
  }

  render () {
    // console.log(this.state.children)
    return (
      <article id='leftNavBars'>
        <div onClick={this.clickHandler}
          className={`
            menus 
            ${this.props.url && this.props.url === window.global.history.getCurrentLocation().pathname ? 'active' : ''}
            ${this.state.isOpen && this.props.children ? 'open' : ''}
          `}>
          <img src={this.props.children ? require('../../assets/drag.png') : require('../../assets/url.png')} alt='' />
          {this.props.text}
          {/* {this.props.url}
          {window.global.history.getCurrentLocation().pathname} */}
        </div>
        <div style={{ height: this.state.height, opacity: this.state.isOpen ? 1 : 0 }} className='children'>
          <div ref='container' style={{ backgroundColor: this.props.children && this.props.children.color ? this.props.children.color : '#42485B'}}>
            {this.state.children}
          </div>
        </div>
      </article>
    )
  }
}
