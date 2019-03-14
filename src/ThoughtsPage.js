import React, { Component } from 'react'

export default class ThoughtsPage extends Component {
  render() {
    return (
      <div>
                <div className="App">
          <div className='blog'>
            <div className='post-container'>
              < Posts />
            </div>
            <div className='form-container'>
              < Postform />
            </div>
          </div>
          <div className='form-container'>
             < Users />
          </div>

        </div>
      </div>
    )
  }
}
