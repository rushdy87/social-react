import './Online.css';
const Online = ({ user }) => {
  return (
    <li className="online-friend">
      <div className="online-profile-image-container">
        <img
          src={user.profilePicture}
          alt=""
          className="online-profile-image"
        />
        <span className="online-circle"></span>
      </div>
      <span className="online-username">{user.username}</span>
    </li>
  );
};

export default Online;
