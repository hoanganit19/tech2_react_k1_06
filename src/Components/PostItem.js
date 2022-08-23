import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class PostItem extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const {post} = this.props;

    return (
        <>
            <div className="post-preview">
                <NavLink to={`bai-viet/${post.id}`}>
                <h2 className="post-title">
                  {post.title}
                </h2>
                <h3 className="post-subtitle">
                  {post.excerpt}
                </h3>
              </NavLink>
              <p className="post-meta">
                Posted by
                 <a href="#!">Tech2</a> - 
                {post.created_at}
              </p>
            </div>
            {/* Divider*/}
            <hr className="my-4" />
        </>
    )
  }
}

export default PostItem