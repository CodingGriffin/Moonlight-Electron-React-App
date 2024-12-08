/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
interface Result {
  recipient: string;
  subject: string;
}

interface TabComponentProps {
  data: Result[];
}

function EmailTable({ data }: TabComponentProps) {
  return (
    <div className="relative h-auto">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-300 mx-2">
        <thead className="text-sm">
          <tr className="">
            <th scope="col" className="pl-2 w-[2rem]">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-00 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="w-[3rem]">
              No
            </th>
            <th scope="cols-span-3" className="">
              To
            </th>
            <th scope="cols-span-7" className="">
              Subject
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {data && data.length ? (
            data.map((_item: Result, index) => {
              return (
                <tr className="border-t border-gray-500 border-solid">
                  <td className="w-4 p-4 pl-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <th className="px-2 py-5">{index + 1}</th>
                  <td className="px-2">{_item.recipient}</td>
                  <td className="px-2">{_item.subject}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={9} className="text-center pt-12 text-gray-700 font-bold sm:text-md lg:text-xl text-bold">
                NO DATA TO SHOW
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap flex-row justify-center pt-2"
        aria-label="Table navigation"
      >
        <ul className="inline-flex -space-x-px rtl:space-x-reverse sm:text-xs lg:text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 rounded-s-lg hover:text-black dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-black dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-black dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-white rounded-full bg-gray-400 dark:bg-stone-100 hover:text-black dark:hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-black dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-black dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-e-lg hover:text-black dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default EmailTable;
