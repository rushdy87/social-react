import './Rightbar.css';
import { Users } from '../../dummyData';
import { Online } from '../';

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-image" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">{renderOnlineFriends}</ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">Barcelona</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Bagdad</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>
        <h4 className="rightbar-title">User frinds</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-username">
              Jody Abo Khamies
            </span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-username">Asaad Khrshwf</span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-username">
              Jody Abo Khamies
            </span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-username">
              Jody Abo Khamies
            </span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-username">
              Jody Abo Khamies
            </span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-username">
              Jody Abo Khamies
            </span>
          </div>
        </div>
      </>
    );
  };

  const renderOnlineFriends = Users.map((user) => {
    return <Online key={user.id} user={user} />;
  });

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
