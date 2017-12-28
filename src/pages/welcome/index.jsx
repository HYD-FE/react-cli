import React from 'react'
import { connect } from 'react-redux'

import './index.less'

@connect((state,props)=>({
  state2:state,
  props2:props
}))

export default class Welcome extends React.Component {
  constructor (props, context) {
    super(props)
  }
  render(){
   
    return (
      <article className="welcome">
        唯坚持和耐心不负所爱,加油！！！
      </article>
    )
  }
}
