import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-info'>
          <div className='email'>
            <a href='mailto: goatcheese82.dev@gmail.com'>goatcheese82.dev@gmail.com</a>
          </div>
          <div className='info'>
            <p>{'\u00a9'} 2019 goatcheese82</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Footer;