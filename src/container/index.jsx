import React from 'react'
import {connect} from 'react-redux'

import Header from './Header.jsx'

import '../style/container.less'

@connect((state,props)=>({
  state2:state
}))

export default class Container extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { location, children } = this.props
    return (
      <article className="container-root">
        <Header></Header>
        <article className="leftBars"></article>
        <article className="container-body">
          {children}
        </article>
      </article>
    )
  }
}
