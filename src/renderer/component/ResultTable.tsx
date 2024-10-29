/* eslint-disable jsx-a11y/anchor-is-valid */
interface Result {
  name: string;
  address: string;
  industry: string;
  phoneNumber: string;
  email: string;
  website: string;
  googleReview: string;
  socialLinks: string[];
}

interface TabComponentProps {
  data: Result[];
}

function ResultTable({ data }: TabComponentProps) {
  return (
    <div className="relative h-auto">
      <table className="w-full text-sm text-center text-gray-500">
        <thead className="text-sm">
          <tr className="">
            <th scope="col" className="pl-5">
              No
            </th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
              Address
            </th>
            <th scope="col" className="">
              Industry
            </th>
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
            <th scope="col" className="pr-5">
              SocialLinks
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {data && data.length ? (
            data.map((_item: Result, index) => {
              return (
                <tr className="border-t border-gray-500 border-solid">
                  <th className="px-2 py-5 pl-5">{index + 1}</th>
                  <td className="px-2">{_item.name}</td>
                  <td className="px-2">{_item.address}</td>
                  <td className="px-2">{_item.industry}</td>
                  <td className="px-2">{_item.phoneNumber}</td>
                  <td className="px-2">{_item.email}</td>
                  <td className="px-2">{_item.website}</td>
                  <td className="px-2">{_item.googleReview}</td>
                  <td className="px-2 pr-5">{_item.socialLinks}</td>
                </tr>
              );
            })
          ) : (
            <div>No Data To Show</div>
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
