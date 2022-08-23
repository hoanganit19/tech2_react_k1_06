import React, { Component } from 'react'
import ConfigData from '../Configs/Config.json';

export const GlobalContext = React.createContext();

export default class GlobalState extends Component {

  constructor(props){
        super(props);

        this.state = {
            posts: [],
            categoryId: null,
            setCategoryId: (categoryId) => {
                this.setState({
                    categoryId: categoryId
                })
            } 
        }

  }  

  getPosts = (categoryId = 0) => {

      const {PER_PAGE} = ConfigData;

      let postsApi = ConfigData.SERVER_URL+'/posts?_sort=id&_order=desc&_page=1&_limit='+PER_PAGE;

      if (categoryId>0){
        postsApi = ConfigData.SERVER_URL+'/categories/'+categoryId+'?_embed=posts&_sort=id&_order=desc&_page=1&_limit='+PER_PAGE;
      }
      
      fetch(postsApi)
      .then(response => response.json())
      .then(posts => {
          if (posts.posts===undefined){
             this.setState({
                posts: posts
             })   
          }else{
            this.setState({
                posts: posts.posts
             })  
          }  
      })
  }

  componentDidMount = () => {
    //this.getPosts();
  }


  render() {
    
    const {children} = this.props;

    return (
        <GlobalContext.Provider value={{
            data: this.state,
            getPosts: this.getPosts
        }}>
            {children}
        </GlobalContext.Provider>
    )
  }
}

