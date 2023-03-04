import './Post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
  const { desc, photo, date, userId, like, comment } = post;
  const user = Users.find((user) => user.id === userId);

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={user?.profilePicture}
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">{user?.username}</span>
            <span className="post-date">{date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          {desc && <span className="post-text">{desc}</span>}
          <img src={photo} alt="" className="post-image" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="" />
            <img className="like-icon" src="/assets/heart.png" alt="" />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
