import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import downArrowBlack from '../../../assets/images/header/down_arrow_black.svg';


interface functions {
  downloadResult: () => void;
  handleExportButton: () => void;
}

export default function DropdownExportButton({ downloadResult, handleExportButton }: functions) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex items-center text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 sm:text-md px-2 me-2 lg: px-5 py-2.5 mb-2 ">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
            <path d="M7 1.25V12.75M7 12.75L2 8.25M7 12.75L11.5 8.25M1 14.75H13" stroke="#ffffff" stroke-linecap="round"/>
          </svg>
          <span className="">Export</span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="cursor-pointer absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="">
          <MenuItem
            as="div"
            onClick={handleExportButton}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
          >
            Google Sheet
          </MenuItem>
          <MenuItem
            as="div"
            onClick={downloadResult}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
          >
            Excel
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
