import React, { Component } from "react";
import BlogForward from "../components/blogforward";
import BlogBackward from "../components/blogbackward";
import BlogMenuItem from "../components/blogmenuitem";
import { BMenu, Scroller } from "./styles";

class BlogMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.triggerPost = this.triggerPost.bind(this);
    this.changePost = this.changePost.bind(this);
  }
  triggerPost = postId => {
    this.props.changePost(postId);
  };

  changePost = (postId, direction) => {
    this.props.changePost(postId, direction);
  };
  render() {
    let { posts, currentId } = this.props;
    let menu = posts.map(post => (
      <BlogMenuItem
        key={post.id}
        {...post}
        currentId={currentId}
        triggerPost={this.triggerPost.bind(this)}
      />
    ));
    return (
      <BMenu className="blog-menu">
        <h3>Posts</h3>
        <div className="blog-direction">
          <BlogBackward
            currentId={currentId}
            changePost={this.changePost.bind(this)}
          />
          <BlogForward
            currentId={currentId}
            changePost={this.changePost.bind(this)}
          />
        </div>
        <Scroller className="scroller">{menu}</Scroller>
      </BMenu>
    );
  }
}

export default BlogMenu;
