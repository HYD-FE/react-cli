import React from 'react'
import { connect } from 'react-redux'

@connect((state,props)=>({
  state2:state,
  props2:props
}))

export default class Welcome extends React.Component {
  constructor (props, context) {
    super(props)
  }
  render(){
    console.log(this)
    return (
      <article>
        登录成功啦，react好难，请加油！！
      </article>
    )
  }
}
