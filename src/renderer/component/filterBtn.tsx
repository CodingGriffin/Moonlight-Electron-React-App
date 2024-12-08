import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';

interface FilterComponentProps {
  filterWebsite: () => void;
  filterEmail: () => void;
  filterPhone: () => void;
  filterAddress: () => void;
}

function FilterBtn({
  filterWebsite,
  filterEmail,
  filterAddress,
  filterPhone,
}: FilterComponentProps) {
  const [address, setAddress] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [website, setWebsite] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-0.5 rounded-sm bg-white px-3 py-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:text-xs lg:text-sm">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 fill-current dark:text-white"
          >
            <path d="M4 7.32263C4 7.19002 4.05268 7.06285 4.14645 6.96908C4.24021 6.87531 4.36739 6.82263 4.5 6.82263H7.5C7.63261 6.82263 7.75979 6.87531 7.85355 6.96908C7.94732 7.06285 8 7.19002 8 7.32263C8 7.45524 7.94732 7.58242 7.85355 7.67619C7.75979 7.76995 7.63261 7.82263 7.5 7.82263H4.5C4.36739 7.82263 4.24021 7.76995 4.14645 7.67619C4.05268 7.58242 4 7.45524 4 7.32263ZM2 4.32263C2 4.19002 2.05268 4.06285 2.14645 3.96908C2.24021 3.87531 2.36739 3.82263 2.5 3.82263H9.5C9.63261 3.82263 9.75979 3.87531 9.85355 3.96908C9.94732 4.06285 10 4.19002 10 4.32263C10 4.45524 9.94732 4.58242 9.85355 4.67619C9.75979 4.76995 9.63261 4.82263 9.5 4.82263H2.5C2.36739 4.82263 2.24021 4.76995 2.14645 4.67619C2.05268 4.58242 2 4.45524 2 4.32263ZM0 1.32263C0 1.19002 0.0526785 1.06285 0.146447 0.969079C0.240215 0.87531 0.367392 0.822632 0.5 0.822632H11.5C11.6326 0.822632 11.7598 0.87531 11.8536 0.969079C11.9473 1.06285 12 1.19002 12 1.32263C12 1.45524 11.9473 1.58242 11.8536 1.67619C11.7598 1.76995 11.6326 1.82263 11.5 1.82263H0.5C0.367392 1.82263 0.240215 1.76995 0.146447 1.67619C0.0526785 1.58242 0 1.45524 0 1.32263Z" />
          </svg>

          <span className="text-md">Filter</span>
          <svg
            className="w-4 h-4 ml-1"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <div className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              <input
                id="address"
                type="checkbox"
                value=""
                checked={address}
                onClick={async () => {
                  await setAddress(!address);
                  await filterAddress();
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="address"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Address
              </label>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              <input
                id="phone"
                type="checkbox"
                value=""
                checked={phone}
                onClick={async () => {
                  await setPhone(!phone);
                  await filterPhone();
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="phone"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Phone Number
              </label>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              <input
                id="email"
                type="checkbox"
                value=""
                checked={email}
                onClick={async () => {
                  await setEmail(!email);
                  await filterEmail();
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="email"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Email
              </label>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              <input
                id="website"
                type="checkbox"
                value=""
                checked={website}
                onClick={async () => {
                  await setWebsite(!website);
                  await filterWebsite();
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="website"
                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Website
              </label>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default FilterBtn;
