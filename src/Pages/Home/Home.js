import React, { Component } from "react";

import Paginate from "./Components/Paginate";
import PostItem from "../../Components/PostItem";

import Header from "../../Layouts/Header";

import Footer from "../../Layouts/Footer";

import { GlobalContext } from "../../Context/GlobalState";

import { withContext } from "../../Context/WithContext";

export class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {

    this.props.getPosts(0);

  }

  render() {
    
     return (
      <>
      <Header />
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {this.props.data.posts.map((post) => {
                return (
                  <React.Fragment key={post.id}>
                      <PostItem post={post}/>
                  </React.Fragment>
                  
                );
              })}
              <Paginate />
            </div>
          </div>
        </div>
        <Footer />
      </>
     );

  
  }
}

export default withContext(Home);
