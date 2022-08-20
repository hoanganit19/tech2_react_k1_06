import React, { Component } from 'react'
import PostItem from '../../PostItem'
import Paginate from '../Home/Components/Paginate'

export class Posts extends Component {
  render() {
    return (
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <h1>Tên chuyên mục</h1>
                
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

export default Posts