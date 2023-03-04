import './CloseFriend.css';

const closeFriend = ({ user }) => {
  return (
    <li className="close-friend-list-item">
      <img src={user.profilePicture} alt="" className="close-friend-image" />
      <span className="close-friend-name">{user.username}</span>
    </li>
  );
};

export default closeFriend;
