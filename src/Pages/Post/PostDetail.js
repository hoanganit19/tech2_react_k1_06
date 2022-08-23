import React, { Component, useState, useEffect } from "react";

import Header from "../../Layouts/Header";

import Footer from "../../Layouts/Footer";

import { useParams } from "react-router-dom";

import ConfigData from '../../Configs/Config.json';

import { withRouter } from "../../Services/WithRouter";

class PostDetail extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      post: {}
    }

  }

  componentDidMount = () => {

        const {id} = this.props.params;

        const postsApi = ConfigData.SERVER_URL+'/posts/'+id;

        fetch(postsApi)
        .then(response => response.json())
        .then(post => {
            this.setState({
              post: post
            })
        });
  }

  render(){
    return (
      <>
        <Header />
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <h1>{this.state.post.title}</h1>
                <div dangerouslySetInnerHTML={{
                  __html: this.state.post.content
                }} />
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </>
    );
  }
}

export default withRouter(PostDetail);