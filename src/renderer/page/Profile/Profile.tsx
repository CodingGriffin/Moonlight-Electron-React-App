import avatar from '../../../../assets/images/header/avatar.png';
import './style.css';

function Profile() {
  return (
    <div className="rounded-3xl pb-10 profile-bg mx-10 p-10">
      <div className="flex justify-end w-full">
        <button className="save-btn" type="button">
          Save Changing
        </button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center mr-20">
          <img
            className="w-36 h-36 mb-5 rounded-full"
            src={avatar}
            alt="avatar"
          />
          <button
            className="w-28 h-10 upload-btn flex items-center justify-center"
            type="button"
          >
            upload
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <span className="full-name">Full Name</span>
          <span className="specify-name">Specify your full name</span>
          <div>
            <input
              className="profile-input rounded-md mr-5 py-1"
              type="text"
              placeholder="First Name"
            />
            <input
              className="profile-input rounded-md py-1"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
