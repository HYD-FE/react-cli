import React from 'react'
import {connect}  from 'react-redux'
import {Menus} from '@comps'

@connect((state,props)=>({  //dispatch 等连接的东西
  navlist: state.config && state.config.navList ? state.config.navList:[],
  state2:state
}))

export default class LeftBars extends React.Component {
  constructor (props,context) {
    super(props)
  }

  render () {
   // console.log(this)
    let list = this.props.navlist
    let items = []
    list.forEach((e,i)=>{
      //items.push(<div key={i} url={e.url} onClick={this.clickHandler} ><img src={require('../assets/drag.png')} alt="" />{e.name}</div>)
      if(e.children){
        items.push(<Menus key={i} children={e.children} text={e.name}></Menus>)
      }else{
        items.push(<Menus key={i} url={e.url} text={e.name}></Menus>)
      }
    })
    return (
      <article className='leftBars'>
        {items}
      </article>
    )
  }
}
