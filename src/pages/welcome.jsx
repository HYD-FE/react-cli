import React from 'react'
import { connect } from 'react-redux'

@connect((state,props)=>{

})

export default class Welcome extends React.Component {
  constructor (props, context) {
    super(props)
  }
  render(){
    return (
      <article>
        登录成功啦，react好难，请加油！！
      </article>
    )
  }
}
