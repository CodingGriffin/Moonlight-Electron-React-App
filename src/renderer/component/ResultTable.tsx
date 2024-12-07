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

function ResultTable({ data, favorite }: TabComponentProps) {
  return (
    <div className="flex flex-col pt-12 sm:overflow-x-scroll lg:overflow-x-auto dark:bg-gray-800">
      <div className='pb-1'>
        <table className="min-w-full table-fixed text-center dark:text-gray-300 sm:text-[0.6rem] lg:text-sm">
          <thead className="sm:text-[0.6rem] lg:text-sm">
            <tr className="row border-b-2 border-gray-600 border-solid p-2">
              <th scope="col" className="sm:pl-2 pb-5 lg:pl-3">
                No
              </th>
              <th scope="col" className="pb-5">
                Name
              </th>
              <th scope="col" className="pb-5">
                Address
              </th>
              {/* <th scope="col" className="w-2/12">
                Industry
              </th> */}
              <th scope="col" className="pb-5">
                Phone Number
              </th>
              <th scope="col" className="pb-5">
                Email
              </th>
              <th scope="col" className="pb-5">
                Website
              </th>
              <th scope="col" className="pb-5">
                GoogleReview
              </th>
              <th scope="col" className="pl-2 pb-5">
              </th>
              {/* <th scope="col" className="w-2/12 pr-5">
                SocialLinks
              </th> */}
            </tr>
          </thead>
          <tbody className="text-gray-900 font-semibold dark:text-gray-100">
            {data && data.length ? (
              data.map((_item: Result, index) => {
                return (
                  <tr
                    className={`${index % 2 == 0 ? 'bg-gray-300 dark:bg-gray-600' : 'bg-white dark:bg-gray-400'}`}
                    key={index}
                  >
                    <td className="sm:px-1 py-4 pl-1 lg:px-2 py-5 pl-5">{index + 1}</td>
                    <td className="sm:px-1 lg:px-2">{_item.name}</td>
                    <td className="sm:px-1 lg:px-2">{_item.formatted_address}</td>
                    {/* <td className="sm:px-1 lg:px-2">{_item.industry}</td> */}
                    <td className="sm:px-1 lg:px-2">{_item.phoneNumber}</td>
                    <td className="sm:px-1 lg:px-2">{_item.email}</td>
                    <td className="sm:px-1 lg:px-2">{_item.website}</td>
                    <td className="sm:px-1 pr-1 lg:px-2 pr-5">{_item.rating}</td>
                    <td className="sm:px-2 pr-1 lg:px-2 pr-5" onClick={() => {favorite(_item._id ? _item._id : _item); _item.isFavorite = !_item.isFavorite}}>
                      {_item.isFavorite ? <UnFavoriteBlack /> : <FavoriteBlack />}
                    </td>
                    {/* <td className="px-2 pr-5">{_item.socialLinks}</td> */}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={9} className="text-center pt-12 sm:text-md lg:text-xl text-bold">
                  NO DATA TO SHOW
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;
