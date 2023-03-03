import './Rightbar.css';

const Rightbar = () => {
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
        <ul className="rightbar-friend-list">
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">John Carter</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/4.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Jami Sull</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/5.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Sami Khodera</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/6.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Mo Salah</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/7.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Omtiti</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/8.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Shiry Carl</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/9.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Dr. Waad</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-image-container">
              <img
                src="/assets/person/10.jpeg"
                alt=""
                className="rightbar-profile-image"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Sara Pokman</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
