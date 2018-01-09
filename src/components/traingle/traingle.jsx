import React from 'react'

import './traingle.less'

export default class Traingle extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div onClick={this.props.onClick} className={`triangle${this.props.opened ? ' isopen' : ''}`} />
    )
  }
}
