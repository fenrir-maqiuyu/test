import React, { Component } from 'react'

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: []
        }
    }
    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(data => this.setState({posts: data}))
    }
    render() {
        const postItem = this.state.posts.map(post => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                {postItem}
            </div>
        )
    }
}
export default Posts;
