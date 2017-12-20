import React from 'react'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <header className='contaniner-header'>
        <section className='logo'><img className src={require('../assets/group.png')} alt='' />HYD</section>
      </header>
    )
  }
}
