import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import downArrowBlack from '../../../assets/images/header/down_arrow_black.svg';

import './style.css';

interface functions {
  downloadResult: () => void;
  handleExportButton: () => void;
}

export default function DropdownExportButton({ downloadResult, handleExportButton }: functions) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="button-export inline-flex w-full h-10 justify-center items-center gap-x-1.5 rounded-xl bg-white text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
          <span className="">Export</span>
          <img
            className="down-arrow mt-1"
            src={downArrowBlack}
            alt="down arrow"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
