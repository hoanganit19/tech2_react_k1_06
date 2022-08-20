import React, { Component } from 'react'

export class Paginate extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-end mb-4">
            <a className="btn btn-primary text-uppercase" href="#!">
            Older Posts →
            </a>
        </div>
      </>
    )
  }
}

export default Paginate