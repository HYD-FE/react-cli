import React from 'react'
import { connect } from 'react-redux'
import './menus.less'


@connect((state, props) => ({  //dispatch 等连接的东西
  routepath: state.routing.locationBeforeTransitions.pathname
}))

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
    this.reopen = this.reopen.bind(this)
    this.loadChildren = this.loadChildren.bind(this)
  }

  componentWillReceiveProps (nextProps) {  // 宣告破产
    this.loadChildren(nextProps)
  }
  componentWillMount () {
    this.loadChildren()
  }

  /**
   * 加载孩子
   */
  loadChildren(nextprops){
    let props = nextprops ?nextprops:this.props
    let state = this.state
    let children = []
    props.children && props.children.list && props.children.list.forEach((e, i) => {
      if (e.children) {
        children.push(<Menus key={i} routepath={props.routepath} openFather={this.reopen.bind(this)} children={e.children} text={e.name} />)
      } else {
        children.push(<Menus key={i} url={e.url} routepath={props.routepath} text={e.name} />)
      }
    })
    state.children = children
    this.setState(state)
  }

 

  /**
   * 开关子节点
   */
  open () {
    if (this.state.isOpen) {  // 开
      this.props.openFather && this.props.openFather(this.refs.container.offsetHeight)  // 这样是让父亲先动
      this.state.height = this.refs.container.offsetHeight
    } else { // 关
      this.props.openFather && this.props.openFather(-this.refs.container.offsetHeight)  // 这样是让父亲先动
      this.state.height = 0
    }
    this.setState(this.state)
  }
  /**
   *
   * @param {number} height --因为子菜单高度变化， 所以先让父亲变
   */
  reopen (height) {
    this.state.height = this.refs.container.offsetHeight + height
    this.setState(this.state)
  }
  /**
   * 点击触发的事件
   */
  clickHandler () {
    if (this.props && this.props.children) {  // 有孩子的操作
      let state = this.state
      state.isOpen = !state.isOpen
      this.setState(state)
      this.open()
    } else {  // 无孩子进行链接跳转操作
      if (window.global && window.global.history) {
        if (window.global.history.getCurrentLocation().pathname !== this.props.url) {
          window.global.history.push({ pathname: '/'+this.props.url })
        }
      }
    }
  }

  render () {
   // console.log(this.props)
    return (
      <article id='leftNavBars'>
        <div onClick={this.clickHandler}
          className={`
            menus 
            ${this.props.url && this.props.routepath&&'/'+this.props.url === this.props.routepath ? 'active' : ''}
            ${this.state.isOpen && this.props.children ? 'open' : ''}
          `}>
          <img src={this.props.children ? require('../../assets/drag.png') : require('../../assets/url.png')} alt='' />
          {this.props.text}
          {/* {this.props.url}
          {window.global.history.getCurrentLocation().pathname} */}
        </div>

        {/* {孩子容器} */}
        <div style={{ height: this.state.height, opacity: this.state.isOpen ? 1 : 0 }} className='children'>
          <div ref='container' style={{ backgroundColor: this.props.children && this.props.children.color ? this.props.children.color : '#42485B'}}>
            {this.state.children}
          </div>
        </div>
      </article>
    )
  }
}
