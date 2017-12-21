import React from 'react'
import {connect}  from 'react-redux'

@connect((state,props)=>({  //dispatch 等连接的东西
  navlist: state.config && state.config.navList ? state.config.navList:[],
  state2:state
}))

export default class LeftBars extends React.Component {
  constructor (props,context) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e){
    this.props.router.push({ pathname: e.target.getAttribute('url')})
  }

  render () {
   // console.log(this)
    let list = this.props.navlist
    let items = []
    list.forEach((e,i)=>{
      items.push(<div key={i} url={e.url} onClick={this.clickHandler} ><img src={require('../assets/drag.png')} alt="" />{e.name}</div>)
    })
    return (
      <article className='leftBars'>
        {items}
      </article>
    )
  }
}
