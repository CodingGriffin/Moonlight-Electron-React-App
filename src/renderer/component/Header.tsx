import avatar from '../../../assets/images/header/avatar.png';
import downArrowBlack from '../../../assets/images/header/down_arrow_black.svg';
import downArrowWhite from '../../../assets/images/header/down_arrow_white.svg';
import searchIconBlack from '../../../assets/images/header/search_icon_black.svg';
import searchIconWhite from '../../../assets/images/header/search_icon_white.svg';

function Header() {
  return (
    <div className="flex w-full">
      <div className="grow">
        <input className="rounded-xl w-full search" type="text" />
      </div>
      <div className="grow">DashBoard</div>
      <div className="flex grow">
        <div>
          <span>Uroos Fatina</span>
          <span>Uroos.desing@gmail.com</span>
        </div>
        <div className="flex">
          <img src={avatar} alt="avater" />
          <img src={downArrowWhite} alt="down arrow" />
        </div>
      </div>
    </div>
  );
}

export default Header;
