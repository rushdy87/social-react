import './Post.css';
import { MoreVert } from '@mui/icons-material';

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">Safak Kocaogle</span>
            <span className="post-date">5 mins ago</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Hey!! It's my first Post :)</span>
          <img src="/assets/post/1.jpeg" alt="" className="post-image" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="" />
            <img className="like-icon" src="/assets/heart.png" alt="" />
            <span className="post-like-counter">32 people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
