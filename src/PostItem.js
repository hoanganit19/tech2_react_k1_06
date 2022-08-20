import React, { Component } from 'react'

export class PostItem extends Component {
  render() {
    return (
        <>
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 24, 2022
              </p>
            </div>
            {/* Divider*/}
            <hr className="my-4" />
        </>
    )
  }
}

export default PostItem