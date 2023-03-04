import './Feed.css';
import { Share, Post } from '../';
import { Posts } from '../../dummyData';

const Feed = () => {
  const renderPosts = Posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {renderPosts}
      </div>
    </div>
  );
};

export default Feed;
