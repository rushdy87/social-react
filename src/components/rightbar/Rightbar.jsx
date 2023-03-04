import './Rightbar.css';
import { Users } from '../../dummyData';
import { Online } from '../';

const Rightbar = () => {
  const renderOnlineFriends = Users.map((user) => {
    return <Online key={user.id} user={user} />;
  });

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-image" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">{renderOnlineFriends}</ul>
      </div>
    </div>
  );
};

export default Rightbar;
