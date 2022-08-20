import React, { Component } from 'react'
import PostItem from '../../PostItem'
import Paginate from './Components/Paginate'

export class Home extends Component {
  render() {
    return (
        <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            
            <PostItem />

            <PostItem />

            <PostItem />

            <Paginate />
          </div>
        </div>
      </div>
      
    )
  }
}

export default Home