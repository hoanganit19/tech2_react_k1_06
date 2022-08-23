import React, { Component } from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from '../Pages/Home/Home';
import Posts from '../Pages/Post/Posts';
import PostDetail from '../Pages/Post/PostDetail';
import NotFound from '../Pages/Errors/404';

export class RoutePublic extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/chuyen-muc/:id" element={<Posts />} />
            <Route path="/bai-viet/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  }
}

export default RoutePublic