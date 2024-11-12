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
    <div className="relative h-auto">
      <table className="min-w-full table-fixed text-sm text-center text-gray-500">
        <thead className="text-sm">
          <tr className="">
            <th scope="col" className=" pl-5">
              No
            </th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
              Address
            </th>
            {/* <th scope="col" className="w-2/12">
              Industry
            </th> */}
            <th scope="col" className="">
              PhoneNumber
            </th>
            <th scope="col" className="">
              Email
            </th>
            <th scope="col" className="">
              Website
            </th>
            <th scope="col" className="">
              GoogleReview
            </th>
            <th scope="col" className=" pr-5">
              <FavoriteBlack />
            </th>
            {/* <th scope="col" className="w-2/12 pr-5">
              SocialLinks
            </th> */}
          </tr>
        </thead>
        <tbody className="text-white">
          {data && data.length ? (
            data.map((_item: Result, index) => {
              return (
                <tr
                  className="border-t border-gray-500 border-solid"
                  key={index}
                >
                  <th className="px-2 py-5 pl-5">{index + 1}</th>
                  <td className="px-2">{_item.name}</td>
                  <td className="px-2">{_item.formatted_address}</td>
                  {/* <td className="px-2">{_item.industry}</td> */}
                  <td className="px-2">{_item.phoneNumber}</td>
                  <td className="px-2">{_item.email}</td>
                  <td className="px-2">{_item.website}</td>
                  <td className="px-2 pr-5">{_item.rating}</td>
                  <td className="px-2 pr-5" onClick={() => {favorite(_item._id); _item.isFavorite = !_item.isFavorite}}>
                    {_item.isFavorite ? <UnFavoriteBlack /> : <FavoriteBlack />}
                  </td>
                  {/* <td className="px-2 pr-5">{_item.socialLinks}</td> */}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={9} className="text-center">
                No Data To Show
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-center pt-4 pb-b"
        aria-label="Table navigation"
      >
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 rounded-s-lg hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-white bg-stone-100 hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-e-lg hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ResultTable;
