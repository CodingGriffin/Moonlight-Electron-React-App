/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as FavoriteWhite } from '../../../assets/images/button_icon/favorite_white.svg';
import { ReactComponent as FavoriteBlack } from '../../../assets/images/button_icon/favorite_black.svg';
import { ReactComponent as UnFavoriteWhite } from '../../../assets/images/button_icon/unfavorite_white.svg';
import { ReactComponent as UnFavoriteBlack } from '../../../assets/images/button_icon/unfavorite_black.svg';

interface Result {
  private _id(_id: any): void;
  name: string;
  formatted_address: string;
  industry: string;
  phoneNumber: string;
  email: string;
  website: string;
  rating: string;
  socialLinks: string[];
  isFavorite: boolean;
}

interface TabComponentProps {
  data: Result[];
  favorite: (id: any) => void;
}

function ResultTableDiv({ data, favorite }: TabComponentProps) {
  return (
    <>
        <div className='grid grid-rows-none grid-cols-12 gap-2'>
            <div className=''>No</div>
            <div className='col'>Name</div>
            <div className=''>Address</div>
            <div className=''>PhoneNumber</div>
            <div className=''>Email</div>
            <div className=''>Website</div>
            <div className=''>GoogleReview</div>
            <div className=''></div>
        </div>
        {data && data.length ? (data.map((_item:Result, index) => (
            <div className='grid grid-rows-none grid-cols-12 gap-2'>
                <div className=''>{index + 1}</div>
                <div className=''>{_item.name}</div>
                <div className=''>{_item.formatted_address}</div>
                <div className=''>{_item.phoneNumber}</div>
                <div className=''>{_item.email}</div>
                <div className=''>{_item.website}</div>
                <div className=''>{_item.rating}</div>
                <div className='' onClick={() => {favorite(_item._id ? _item._id : _item); _item.isFavorite = !_item.isFavorite}}>{_item.isFavorite ? <UnFavoriteBlack /> : <FavoriteBlack />}</div>
            </div>
        ))) :
        <></>}
    </>
  );
}

export default ResultTableDiv;
